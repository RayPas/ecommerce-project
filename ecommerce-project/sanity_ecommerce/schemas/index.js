import product from './product';
import banner from './banner';

export const schemaTypes = [product, banner]
const createSchema = {
    name: 'default',
    types: schemaTypes.concat([ product, banner ]),
}

export default createSchema;
