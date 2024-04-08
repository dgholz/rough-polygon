import test from 'ava';
import { hello } from '@dgholz/rough-polygon';

test('hello', t => {
	t.assert( hello() == 'world' )
});
