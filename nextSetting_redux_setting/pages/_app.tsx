import wrapper from "../store/configureStore";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
