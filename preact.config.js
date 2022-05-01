export default (config) => {
    if(process.env.GH_BUILD) {
        config.output.publicPath = '/simon-says/';
    }
  };