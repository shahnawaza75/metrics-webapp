import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../app/store';
import Home from '../components/Home';

const HomeStore = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

describe('Test Home Components', () => {
  it('Output', () => {
    const home = renderer.create(
      <HomeStore />,
    ).toJSON();

    expect(home).toMatchSnapshot();
  });
});
