import { validateConfiguration } from '../Helpers';

describe('validateConfiguration Function', () => {
  it('Should throw an Error if baseUrl is not provided', () => {
    const configuration = {
      services: [],
    };

    try {
      validateConfiguration(configuration);
    } catch (e) {
      const { message } = e;
      expect(message).toBe('BaseUrl needs to be Provided');
    }
  });

  it('Should throw an Error if baseUrl is not a string', () => {
    const configuration = {
      baseUrl: 1,
      services: [],
    };

    try {
      validateConfiguration(configuration);
    } catch (e) {
      const { message } = e;
      expect(message).toBe('Invalid BaseUrl type');
    }
  });

  it('Should throw an Error if Services are not valid', () => {
    const configuration = {
      baseUrl: 'test',
    };

    try {
      validateConfiguration(configuration);
    } catch (e) {
      const { message } = e;
      expect(message).toBe('Invalid Service type');
    }
  });

  it('Should throw an Error if Services are not provided', () => {
    const configuration = {
      baseUrl: 'test',
      services: [],
    };

    try {
      validateConfiguration(configuration);
    } catch (e) {
      const { message } = e;
      expect(message).toBe('At least a service Must be Provided');
    }
  });

  it('Should return true if a valid configuration is provided', () => {
    const configuration = {
      baseUrl: 'test',
      services: [{}],
    };

    const result = validateConfiguration(configuration);

    expect(result).toBe(true);
  });
});
