'use client';
import {FormEvent, useState} from 'react';
import {graphql, RelayEnvironmentProvider, useMutation} from 'react-relay';
import {getCurrentEnvironment} from '@/relay/clientEnvironment';
import {redirect} from 'next/navigation';
import {useSession} from 'next-auth/react';
import {UserSession} from "@/lib/auth";

const UpdateProfileMutation = graphql`
    mutation pageUpdateUserMutation($newName: String, $newPublicName: String) {
        updateUser(newName: $newName, newPublicName: $newPublicName) {
            id
            name
            publicName
            email
            # Other fields
        }
    }
`;

function ProfileComponent({session}: { session: UserSession }) {
  const [name, setName] = useState(session.user.name);
  const [publicName, setPublicName] = useState(session.user.publicName || 'Anonymous');
  const [commit, isInFlight] = useMutation(UpdateProfileMutation);
  const [message, setMessage] = useState({type: '', content: ''});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    commit({
      variables: {
        newName: name,
        newPublicName: publicName,
      },
      onCompleted: (response, errors) => {
        if (errors) {
          setMessage({type: 'error', content: 'Failed to update profile.'});
          return;
        }
        setMessage({type: 'success', content: 'Profile updated successfully!'});
        // TODO: Update session also because refresh currently shows the old name
        // TODO: Figure out how to get the types from the response for TypeScript happiness
        // @ts-ignore
        setName(response.updateUser.name);
        // @ts-ignore
        setPublicName(response.updateUser.publicName);
      },
      onError: () => {
        setMessage({type: 'error', content: 'An error occurred while updating the profile.'});
      },
    });
  };

  return (
    <div className="dark:bg-gray-800 dark:text-white p-4 md:p-8">
      {/* Success/Error message */}
      {message.content && (
        <div
          className={`alert ${message.type === 'error' ? 'alert-error' : 'alert-success'} shadow-lg mb-4`}
        >
          <div>
            <span>{message.content}</span>
          </div>
        </div>
      )}
      {/* Form */}
      <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
        <div className="p-4 md:p-6">
          <p className="text-center text-lg font-semibold dark:text-gray-300">Update Profile</p>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                disabled={isInFlight}
              />
            </div>
            <div>
              <label htmlFor="publicName" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Public
                Name</label>
              <input
                type="text"
                id="publicName"
                name="publicName"
                value={publicName}
                onChange={(e) => setPublicName(e.target.value)}
                className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                disabled={isInFlight}
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              disabled={isInFlight}
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  const session = useSession();

  if (session.status === 'loading') {
    return (
      <p className="text-center text-lg dark:text-gray-300">Loading...</p>
    );
  }

  if (!session) {
    // TODO: Redirect to login page
    redirect('/api/auth/signin');
    return (
      <p className="text-center text-lg dark:text-gray-300">Redirecting to login...</p>
    );
  }

  const user = session.data as UserSession | undefined;

  if (!user) {
    return (
      <p className="text-center text-lg dark:text-gray-300">User not found</p>
    );
  }

  const environment = getCurrentEnvironment();

  return (
    <RelayEnvironmentProvider environment={environment}>
      <ProfileComponent session={user}/>
    </RelayEnvironmentProvider>
  );
}
