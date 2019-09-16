import React from 'react'
import {Icon, Menu} from "antd";
import menus from '../../config/menu'
import {withRouter, Link} from 'react-router-dom';

const {SubMenu} = Menu;

@withRouter
class LeftNav extends React.Component {
    createItem = (menu) => {
        return <Menu.Item key={menu.key}>
            <Link to={menu.key}>
                <Icon type={menu.icon}/>
                <span>{menu.title}</span>
            </Link>
        </Menu.Item>
    };
    createMenu = () => {
        return menus.map((menu) => {
            if (menu.children) {
                return <SubMenu
                    key={menu.key}
                    title={
                        <span>
                  <Icon type={menu.icon}/>
                  <span>{menu.title}</span>
                </span>
                    }
                >
                    {
                        menu.children.map((cMenu) => {
                            return this.createItem(cMenu);
                        })
                    }
                </SubMenu>

            } else {
                return this.createItem(menu);
            }
        })
    }
    findOpenKeys=(pathname)=>{
            //for循环性能比forEach好一点
        for (let i = 0; i < menus.length ; i++) {
            const menu = menus[i];
            if(menu.children){
                for (let j = 0; j < menu.children.length; j++) {
                    const cMenu = menu.children[j];
                    if(cMenu.key === pathname){
                        //打开二级菜单的一级菜单 所以是menu
                        return menu.key
                    }
                }
            }
        }
    }

    render() {
        const {pathname} = this.props.location;
        const menus = this.createMenu();
        const openKeys = this.findOpenKeys(pathname)
        return (
            <Menu theme="dark" defaultSelectedKeys={[pathname]} defaultOpenKeys={[openKeys]} mode="inline">
                {
                    menus
                }
            </Menu>
        )
    }
}

export default LeftNav