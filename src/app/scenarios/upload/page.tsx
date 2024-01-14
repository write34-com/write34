'use client';
import React, {useState} from 'react';
import Link from "next/link";

function UploadNewScenario() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{
    type: 'error' | 'success' | '',
    content: string | React.ReactNode
  }>({type: '', content: ''});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    // @ts-ignore
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setMessage({type: 'error', content: 'No file selected.'});
      return;
    }
    setUploading(true);

    // Read the file content
    const reader = new FileReader();
    reader.onload = async (event) => {
      if (!event.target || !event.target.result) {
        setMessage({type: 'error', content: 'Error reading file'});
        setUploading(false);
        return;
      }

      if (typeof event.target.result !== 'string') {
        setMessage({type: 'error', content: 'Error reading file, bad type'});
        setUploading(false);
        return;
      }

      try {
        // Assuming the file content is a valid JSON string
        const jsonContent = JSON.parse(event.target.result);

        // Send the JSON content to the API
        const response = await fetch('/api/scenarios/upload-scenario', {
          method: 'POST',
          body: JSON.stringify(jsonContent),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const responseData = await response.json();
        if (responseData.promptId) {
          setMessage({
            type: 'success',
            content: (
              <div className="dark:text-white">
                Scenario uploaded successfully!
                <Link href={`/scenarios/${responseData.promptId}`}>
                  <span className="ml-2">Click to View Scenario</span>
                </Link>
              </div>
            )
          });
          setTimeout(() => {
            // TODO: figure out why next redirect doesn't work here
            // Redirect to the new scenario
            document.location.href = `/scenarios/${responseData.promptId}`;
          }, 2000);
        } else {
          setMessage({type: 'error', content: 'Failed to upload file: ' + responseData.message || 'Unknown error'});
        }
      } catch (error) {
        setMessage({
          type: 'error',
          content: error && (
            error as any
          ).message || 'Unknown error'
        });
      } finally {
        setUploading(false);
      }
    };

    reader.onerror = () => {
      setMessage({type: 'error', content: 'Error reading file'});
      setUploading(false);
    };

    // Read the file as a text string
    reader.readAsText(file);
  };

  return (
    <div className="p-4 mb-80 max-w-md mx-auto">
      {message.content && (
        <div className={`alert ${message.type === 'error' ? 'alert-error' : 'alert-success'}`}>
          <div>
            <span>{message.content}</span>
          </div>
        </div>
      )}
      <div className="text-xl font-bold mb-4 dark:text-gray-50">Upload New Scenario</div>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-control items-center">
          <input type="file" onChange={handleFileChange} disabled={uploading}
                 className="input input-bordered w-full pt-2"/>
        </div>
        <div className="form-control mt-4">
          <button type="submit" disabled={uploading} className={`btn ${uploading ? 'btn-disabled' : 'btn-primary'}`}>Upload File</button>
        </div>
      </form>
    </div>
  );
}

export default function UploadPage() {

  return (
    <UploadNewScenario/>
  );
}
