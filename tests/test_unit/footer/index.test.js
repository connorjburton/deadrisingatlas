import { shallow } from 'enzyme';
import Footer from '../../../src/components/footer';

describe('Footer', () => {
	test('Developed by credits should link to correct github accounts', () => {
        const component = shallow(<Footer />);
        expect(component).toMatchSnapshot();
	});
});