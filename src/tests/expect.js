import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiSubset from 'chai-subset';
import chaiSubsetInOrder from 'chai-subset-in-order';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';

chai.use(chaiSubset);
chai.use(chaiSubsetInOrder);
chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.use(dirtyChai);

export default expect;
