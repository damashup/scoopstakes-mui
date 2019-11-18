import {facebookProvider, 
        githubProvider, 
        googleProvider,
        twitterProvider} from '../index';


const conditionalProvider = providerName => {
    if (providerName === 'facebookProvider'){
      return facebookProvider;
    } else if (providerName === 'githubProvider'){
      return githubProvider;
    } else if (providerName === 'googleProvider'){
      return googleProvider;
    }  else if (providerName === 'twitterProvider'){
        return twitterProvider;
    }
  }

export default conditionalProvider;