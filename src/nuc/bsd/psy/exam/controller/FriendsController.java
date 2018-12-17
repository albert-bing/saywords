package nuc.bsd.psy.exam.controller;

import java.util.List;

import nuc.bsd.psy.base.model.AddFriendInfo;
import nuc.bsd.psy.base.model.UserInfo;
import nuc.bsd.psy.exam.service.FriendsService;

import com.jfinal.core.Controller;
/**
 * 用户好友的核心控制器
 * @author bing
 *
 */
public class FriendsController extends Controller{
		/*
		 * 判断用户是否存在
		 */
	public void isExistFriend(){
		int pid = 0;// 判别用户的好友是否添加成功  1--代表成功   -1---代表失败
		System.out.println("成功");
		String addaccount = getPara("addaccount");
		// 调用service层的判断方法
		FriendsService friends = new FriendsService();
		if(friends.isExist(addaccount)){
			List<UserInfo> userinfo = getSessionAttr("userinfo");
			AddFriendInfo friendInfo = friends.findFriendService(addaccount);
			if(friends.isAdd(userinfo,friendInfo)){
				if(friends.addFriend(userinfo,friendInfo)){
					pid = 1;
				}
			}else{
				pid = 2;
			}
		}else{
			pid = -1;
		}
		setAttr("pid", pid);
		renderJson();
	}
}
