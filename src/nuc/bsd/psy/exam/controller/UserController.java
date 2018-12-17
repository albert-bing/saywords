package nuc.bsd.psy.exam.controller;

import java.util.List;

import org.apache.log4j.Logger;

import com.jfinal.core.Controller;
import com.jfinal.log.Log;

import nuc.bsd.psy.base.model.SayFriends;
import nuc.bsd.psy.base.model.Saywords;
import nuc.bsd.psy.base.model.UserInfo;
import nuc.bsd.psy.base.model.UserLogin;
import nuc.bsd.psy.exam.service.UserService;

public class UserController extends Controller {
	private final static Logger LOGGER = Logger.getLogger(UserController.class);
    private final static Log LOG = Log.getLog(UserController.class);
	/**
	 * 默认首页方法
	 */
	public void index() {
		/*log.info("success");*/
		//render("zhunkaozheng.html");
		render("login.html");
	}
	public void logon(){
		String account = getPara("useraccount");
		String pass = getPara("password");
		
		UserLogin user = new UserLogin();
		user.setUseraccount(account);
		user.setUserpass(pass);
		user.setUserid(-1);
		LOGGER.info("log4j info1=="+account+"登录");
        LOG.debug("log4j debug2");
        renderText("log");
        //setSessionAttr("userLogin", user);
		List<UserLogin> userLogin =  new UserService().getUserLoginInfo(user);
		for (UserLogin userLogin2 : userLogin) {
			System.out.println(userLogin2);
		}
		setSessionAttr("userLogin", user);
		renderJson(userLogin);
	}
	/*
	 * 重定向到homePage界面
	 */
	public void sendHomePage(){
		render("homePage.html");
	}
	/*
	 * 获取导航栏 的界面的标识数
	 * 如果是2则：跳转到我的主页
	 * 如果是3则：跳转到我的私密好友
	 * 如果是4则：跳转到联系我们
	 * 如果是5则：跳转关于我们
	 */
	public void getNum(){
		String num = getPara("num");
		setSessionAttr("num", num);
		int code = 0;
		if(num.equals("2")){
			code =  2;
		}else if(num.equals("3")){
			code = 3;
		}else if(num.equals("4")){
			code = 4;
		}else if(num.equals("5")){
			code = 5;
		}
		setAttr("code", code);
		renderJson();
	}
	/*
	 * 获取个人信息
	 */
	 public void getNavPage(){
		 // 获取点击的导航栏的value值
		String num =  getSessionAttr("num");
		UserLogin userlogin = getSessionAttr("userLogin");
		UserService userService = new UserService();
		if(num.equals("2")){
			List<UserInfo> userinfo = userService.getMyHome(userlogin);
			setSessionAttr("userinfo", userinfo);
		}
		List<UserInfo> userinfo = getSessionAttr("userinfo");
		renderJson(userinfo);
	 }
	 /*
	  * 获取密语信息
	  */
	 public void getSaywordsInfo(){
		 // 获取导航栏的value值，用于保证在没有登录的前提下，不可以访问数据信息
		 String nav_num = getPara("nav_num");
		 //System.out.println(nav_num);
		 UserLogin userlogin = getSessionAttr("userLogin");
		 System.out.println(userlogin);
		 UserService userService = new UserService();
		 if(nav_num.equals("2")){
			 List<Saywords> saywords = userService.getSaywordsInfoService(userlogin);
			 setSessionAttr("saywords", saywords);
		 }else if(nav_num.equals("3")){
			 List<SayFriends> saywords = userService.getSayFriendsInfoService(userlogin);
			 setSessionAttr("saywords", saywords);
		 }
		 List<Saywords> saywords = getSessionAttr("saywords");
		 renderJson(saywords);
	 }
}
