import Header from "./Header";

const Layout = props => {
  // props.children.props.searchhandler()
  return (
    <div>
      <Header
        searchhandler={props.children.props.searchhandler}
        showsearch={props.children.props.showsearch}
      />
      {props.children}
    </div>
  );
};

export default Layout;
