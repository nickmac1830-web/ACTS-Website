import assert from 'node:assert/strict';
import test from 'node:test';
import { csvCell, isAuthorised } from '../lib/tester-privacy.ts';

test('CSV formula payloads stay text, including whitespace prefixes', () => {
  for (const value of ['=HYPERLINK("https://example.invalid")', '+1+1', '-1+1', '@SUM(A1)', '  =1+1', '\t=1+1', '\r=1+1']) {
    assert.ok(csvCell(value).startsWith('"\''));
  }
  assert.equal(csvCell('Alex, "Example"'), '"Alex, ""Example"""');
  assert.equal(csvCell('alex@example.com'), '"alex@example.com"');
  assert.equal(csvCell(null), '""');
});

test('admin reads and deletion require a nonempty matching bearer key', () => {
  const req = (key) => new Request('https://actsauctioneer.com/api/android-testers', {
    headers: key ? { Authorization: key } : {},
  });
  assert.equal(isAuthorised(req(), 'test-only-key'), false);
  assert.equal(isAuthorised(req('Bearer wrong'), 'test-only-key'), false);
  assert.equal(isAuthorised(req('Bearer '), ''), false);
  assert.equal(isAuthorised(req('Bearer test-only-key'), 'test-only-key'), true);
});
