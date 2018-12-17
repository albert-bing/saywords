package nuc.bsd.psy.exam.service;

import java.util.Date;
import java.util.List;

import nuc.bsd.psy.base.model.AddFriendInfo;
import nuc.bsd.psy.base.model.SayFriends;
import nuc.bsd.psy.base.model.UserInfo;
import nuc.bsd.psy.base.model.UserLogin;
import nuc.bsd.psy.tools.DateUtil;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

public class FriendsService {
	/*
	 * 判断用户是否存在
	 */
	public boolean isExist(String addaccount){
		boolean flag = false;// 游标---判断用户是否存在
		String sql = "select * from say_user u where useraccount = ?";
		Record record = Db.findFirst(sql,addaccount);
		if(record != null){
			flag = true;
		}else{
			flag = false;
		}
		return flag;
	}
	/*
	 * 判断是否为好友
	 */
	public boolean isAdd(List<UserInfo> userinfo,AddFriendInfo friendInfo){
		boolean flag = false;
		String sql = "select * from say_friends where f_id_info = ? and f_id_user = ?";
		Record record = Db.findFirst(sql,userinfo.get(0).getInfoid(),friendInfo.getUserid());
		if(record != null){
			flag = false;
		}else{
			flag = true;
		}
		return flag;
	}
	/*
	 * 找到这个要添加的用户
	 */
	public AddFriendInfo findFriendService(String addaccount){
		AddFriendInfo friend = new AddFriendInfo();
		String sql = "select u.Infoid as infoid,u.user_info_id as userid from user_info u where userphone = ?";
		Record record = Db.findFirst(sql,addaccount);
		if(record != null){
			
			friend.setInfoid(record.getInt("infoid"));
			friend.setUserid(record.getLong("userid"));
		}
		return friend;
	}
	/*
	 * 如果isExist()方法执行成功，则说明要添加的该用户存在，所以进行添加
	 */
	public boolean addFriend(List<UserInfo> userinfo,AddFriendInfo friendInfo){
		boolean addFlag = false;// 标识是否添加成功
		StringBuffer sb = new StringBuffer();
		String currentTime = DateUtil.format(new Date());
		// 获取user的id值
		sb.append("insert into say_friends(f_addtime,f_id_info,f_id_user) value(?,?,?)");
		int record = Db.update(sb.toString(),currentTime,friendInfo.getInfoid(),userinfo.get(0).getUserid());
		StringBuffer sb1 = new StringBuffer();
		sb1.append("insert into say_friends(f_addtime,f_id_info,f_id_user) value(?,?,?)");
		int record1 = Db.update(sb1.toString(),currentTime,userinfo.get(0).getInfoid(),friendInfo.getUserid());
		if(record != 0 && record1 != 0){
			addFlag = true;
		}
		return addFlag;
	}
}
