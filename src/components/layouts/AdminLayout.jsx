import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  AlignCenterOutlined,
  UserOutlined,
  UserAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";

<UserAddOutlined />;
<UsergroupAddOutlined />;

import { Layout, Menu, Button } from "antd";
import { useContext, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { logOut } from "../../const/const";
import { GeneralContextInfo } from "../../contexts/GeneralContext";
const { Sider, Content } = Layout;
import AdminNav from '../../components/navs/AdminNav'

const AdminLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [path, setPath] = useState(pathname);
  const {setIsAuthenticated} = useContext(GeneralContextInfo);

  const logOutAdmin = () => {
    const check = window.confirm("Do you want to log out of this account?");
    if (check) {
      logOut();
      setIsAuthenticated(false);
      navigate("/login")
    }
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "18px",
            color: "white",
            margin: "0px 0px 10px 25px",
            width: 30,
          }}
        />
        <Menu
          theme={"dark"}
          mode="inline"
          selectedKeys={[path]}
          onClick={({ key }) => {
            setPath(key);
          }}
          items={[
            {
              key: "/dashboard",
              icon: <AlignCenterOutlined />,
              label: <Link to="/dashboard">Dashboard</Link>,
            },
            {
              key: "/admin-account",
              icon: <UserOutlined />,
              label: <Link to="/admin-account">Admin</Link>,
            },
            {
              key: "/admin-teachers",
              icon: <TeamOutlined />,
              label: <Link to="/admin-teachers">{"O'qituvchilar"}</Link>,
            },
            {
              key: "/admin-students",
              icon: <TeamOutlined />,
              label: <Link to="/admin-students">{"O'quvchilar"}</Link>,
            },
            {
              key: "/admin-leaders",
              icon: <TeamOutlined />,
              label: <Link to="/admin-leaders">{"Rahbarlar"}</Link>,
            },
            {
              key: "/admin-learningcenters",
              icon: <TeamOutlined />,
              label: (
                <Link to="/admin-learningcenters">{"O'quv Markazlar"}</Link>
              ),
            },
            {
              key: "/admin-settings",
              icon: <SettingOutlined />,
              label: <Link to="/admin-settings">{"Sozlamalar"}</Link>,
            },
          ]}
        />
        <div className="w-full my-2 flex justify-center">
          <button
            onClick={logOutAdmin}
            className="w-[70px] text-white py-1 hover:bg-white hover:text-gray-700 rounded"
          >
            LogOut
          </button>
        </div>
      </Sider>
      <Layout>
        <AdminNav/>
        <Content>
          <div className="bg-white">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
