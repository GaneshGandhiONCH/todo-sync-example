/// persister-browser

import {OptionalSchemas, Store} from '../store';
import {Persister} from '../persisters';

/// createSessionPersister
export function createSessionPersister<Schemas extends OptionalSchemas>(
  store: Store<Schemas>,
  storageName: string,
): Persister<Schemas>;

/// createLocalPersister
export function createLocalPersister<Schemas extends OptionalSchemas>(
  store: Store<Schemas>,
  storageName: string,
): Persister<Schemas>;
