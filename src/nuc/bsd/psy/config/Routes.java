package nuc.bsd.psy.config;

import nuc.bsd.psy.exam.controller.FriendsController;
import nuc.bsd.psy.exam.controller.UserController;

/**
 * 所有的路由配置文件
 * @author Simple
 *
 */
public class Routes extends com.jfinal.config.Routes{

	@Override
	public void config() {
		// TODO Auto-generated method stub
		
		add("/userlogin", UserController.class, "/User");
		add("/friends", FriendsController.class, "/User");
	}

}
