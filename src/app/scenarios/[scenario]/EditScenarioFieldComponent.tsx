'use client';

import {graphql, useMutation} from "react-relay";
import {EditScenarioFieldComponentMutation} from "@/__generated__/EditScenarioFieldComponentMutation.graphql";
import React, {ReactNode, useEffect, useState} from "react";
import classnames from "classnames";
import {PencilSquareIcon} from '@heroicons/react/20/solid';

const EditScenarioFieldMutation = graphql`
    mutation EditScenarioFieldComponentMutation(
        $id: ID!,
        $newTitle: String,
        $newDescription: String,
        $newPromptContent: String,
        $newMemory: String,
        $newAuthorsNote: String,
        $newNsfw: Boolean) {
        updatePrompt(
            id: $id,
            title: $newTitle,
            description: $newDescription,
            promptContent: $newPromptContent,
            memory: $newMemory,
            authorsNote: $newAuthorsNote,
            nsfw: $newNsfw) {
            id
        }
    }
`;

export interface EditScenarioFieldComponentProps {
  fieldName: 'title' | 'description' | 'authorsNote' | 'memory' | 'promptContent' | 'nsfw';
  className?: string;
  currentContent: string;
  promptId: string;
  isUserAuthor: boolean;
}

function formatContent(content: string) {
  const lines = content.split('\n');

  return lines.map((line, index) => (
    <div className={`mb-3`} key={`line-${index}`}>
      {line}
    </div>
  ));
}

export default function EditScenarioFieldComponent(props: EditScenarioFieldComponentProps) {
  const [commit, isInFlight] = useMutation<EditScenarioFieldComponentMutation>(
    EditScenarioFieldMutation,
  );

  const [committedContent, setCommittedContent] = useState(props.currentContent);
  const [newContent, setNewContent] = useState(props.currentContent);

  const [isEditing, setIsEditing] = useState(false);

  // Closes the edit box after the mutation is complete
  useEffect(() => {
    if (!isInFlight) {
      setIsEditing(false);
    }
  }, [isInFlight]);

  function renderContent() {
    if (props.fieldName === 'title') {
      return (
        <div className={props.className}>
          {committedContent}
        </div>
      );
    }

    if (props.fieldName === 'promptContent') {
      const length = committedContent.length;

      if (length < 300) {
        return (
          <div className={props.className}>
            {committedContent}
          </div>
        );
      }

      return (
        <div className="collapse bg-base-200 dark:bg-base-800 rounded-box">
          <input type="checkbox"/>
          <div className="collapse-title text-sm text-gray-500 dark:text-gray-400 dark:bg-gray-800">
            <span className="line-clamp-3">{committedContent}</span>... [Click to expand]
          </div>
          <div className="collapse-content collapse-arrow dark:text-gray-50 dark:bg-gray-800">
            <div className="mt-1 mr-4 text-sm text-gray-500 dark:text-gray-300">
              {formatContent(committedContent)}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={props.className}>
        {committedContent ? formatContent(committedContent) : `No ${props.fieldName} provided.`}
      </div>
    );
  }

  const content = renderContent();

  if (!props.isUserAuthor) {
    return content;
  }

  if (!isEditing) {
    return (
      <div className="flex items-center col-span-2 dark:text-gray-300">
        {content}
        <button className="btn btn-circle btn-sm ml-2" onClick={() => setIsEditing(true)}>
          <PencilSquareIcon className="h-4 w-4"/>
        </button>
      </div>
    );
  }

  function renderEditor() {
    // Editor for the field using the appropriate editor for the field type
    if (props.fieldName === 'title') {
      return (
        <input type="text"
               className="input input-bordered input-sm dark:text-gray-700"
               value={newContent}
               onChange={(e) => setNewContent(e.target.value)}/>
      );
    }

    if (props.fieldName === 'description' || props.fieldName === 'promptContent' || props.fieldName === 'memory' || props.fieldName === 'authorsNote') {
      return (
        <textarea
          className="textarea textarea-bordered flex-auto w-96 h-44 dark:text-gray-700"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}/>
      );
    }

    // TODO: Make this work
    // if (props.fieldName === 'nsfw') {
    //   return (
    //     <input type="checkbox" checked={props.currentContent === '1'}/>
    //   );
    // }

    return <div>Invalid field choice for editor.</div>;
  }

  // Add save button to editor
  return (
    <div className={'flex items-center col-span-2 dark:text-gray-300'}>
      {renderEditor()}
      <button className="btn btn-primary btn-sm ml-2 flex-initial"
        onClick={async () => {
          if (isInFlight) {
            return;
          }

          if (newContent === committedContent) {
            setIsEditing(false);
            return;
          }

          // Save the new content using mutation
          commit({
            variables: {
              id: props.promptId,
              newTitle: props.fieldName === 'title' ? newContent : undefined,
              newDescription: props.fieldName === 'description' ? newContent : undefined,
              newAuthorsNote: props.fieldName === 'authorsNote' ? newContent : undefined,
              newMemory: props.fieldName === 'memory' ? newContent : undefined,
              newPromptContent: props.fieldName === 'promptContent' ? newContent : undefined,
            }
          });
          setCommittedContent(newContent);
        }}>
        {isInFlight && <span className="loading loading-spinner"></span>}
        {!isInFlight && 'Save'}
      </button>
    </div>
  );
}