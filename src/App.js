import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import Pages from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/authSlice";
const { Header, Content } = Layout;

function App() {
  const dispatch = useDispatch();
  const { isAuth, username } = useSelector((state) => state.auth);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) dispatch(login(token));
  });
  return (
    <Layout className="layout">
      <Header style={{ display: "flex", justifyContent: "space-between", flexDirection: "row-reverse" }}>
        {isAuth ? (
          <>
            <Link onClick={() => dispatch(logout())} to="/">
              Logout
            </Link>
            <Link to="/">{username}</Link>
          </>
        ) : (
          <Link to="/login">login</Link>
        )}
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Pages />
      </Content>
    </Layout>
  );
}

export default App;
