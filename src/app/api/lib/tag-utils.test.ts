import {collectionTagsFromText} from './tag-utils';
import {expect, test} from "@jest/globals";

test('collectionTagsFromText', () => {
  const tags = collectionTagsFromText('[ Tags: tag1, tag2, tag3 ]');
  expect(tags).toEqual(['tag1', 'tag2', 'tag3']);
});
