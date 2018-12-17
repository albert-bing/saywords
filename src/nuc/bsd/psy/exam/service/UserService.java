package nuc.bsd.psy.exam.service;

import java.util.ArrayList;
import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

import nuc.bsd.psy.base.model.SayFriends;
import nuc.bsd.psy.base.model.Saywords;
import nuc.bsd.psy.base.model.UserInfo;
import nuc.bsd.psy.base.model.UserLogin;


public class UserService {
	/*
	 * 用于用户的登录
	 */
	public List<UserLogin> getUserLoginInfo(UserLogin user) {
		List<UserLogin> userLogin = new ArrayList<UserLogin>();
		StringBuffer sb = new StringBuffer();
		sb.append("select * from say_user where  useraccount = ? and userpass = ?");	
		Record	record = Db.findFirst(sb.toString(), user.getUseraccount(),user.getUserpass());
		if(record !=null) {
			user.setUserid(record.getLong("userid"));
			user.setUseraccount(record.getStr("useraccount"));
			user.setUserpass(record.getStr("userpass"));
			userLogin.add(user);
		}else{
			user.setUserid(-1);
			userLogin.add(user);
		}
		//System.out.println(user+"12");
		return userLogin;
	}
	/*
	 * 获取用户的基本信息
	 * “我的主页”的设计方法
	 */
	public List<UserInfo> getMyHome(UserLogin userlogin){
		List<UserInfo> userinfos = new ArrayList<UserInfo>();
		StringBuffer sb = new StringBuffer();
		sb.append("select u.Infoid as Infoid,u.user_info_id as userid,u.username as name,u.usersex as sex,u.userphone as phone,u.useremail as email,u.useraddress as address,p.province as province,c.city as city,a.area as area from user_info u LEFT JOIN province p on u.userprovinceId = p.provinceId LEFT JOIN city c on u.usercityId = c.cityId LEFT JOIN area a on u.userareaId = a.areaId where u.user_info_id = ?");
		List<Record> records = Db.find(sb.toString(),userlogin.getUserid());
		for (Record record : records) {
			UserInfo userinfo = new UserInfo();
			userinfo.setInfoid(record.getInt("Infoid"));
			userinfo.setUserid(record.getLong("userid"));
			userinfo.setArea(record.getStr("area"));
			userinfo.setCity(record.getStr("city"));
			userinfo.setProvince(record.getStr("province"));
			userinfo.setUseraddress(record.getStr("address"));
			userinfo.setUseremail(record.getStr("email"));
			userinfo.setUsername(record.getStr("name"));
			userinfo.setUserphone(record.getStr("phone"));
			userinfo.setUsersex(record.getStr("sex"));
			userinfos.add(userinfo);
		}
		for (UserInfo info : userinfos) {
			System.out.println(info);
		}
		return userinfos;
	}
	/*
	 * 获取用户的密语信息
	 */
	public List<Saywords> getSaywordsInfoService(UserLogin userlogin){
		List<Saywords> saywords = new ArrayList<Saywords>();
		StringBuffer sb = new StringBuffer();
		sb.append("select * from saywords s where s.say_user_id = ?");
		List<Record> records = Db.find(sb.toString(),userlogin.getUserid());
		for (Record record : records) {
			Saywords sayword = new Saywords();
			sayword.setClass_num(record.getInt("class_num"));
			sayword.setContent(record.getStr("content"));
			sayword.setImages_path(record.getStr("images_path"));
			sayword.setPublish_time(record.getDate("publish_time"));
			sayword.setSay_user_id(record.getLong("say_user_id"));
			saywords.add(sayword);
		}
		// 打印测试数据
		for (Saywords say : saywords) {
			System.out.println(say);
		}
		return saywords;
	}
	/*
	 * 获取用户的好友信息
	 */
	public List<SayFriends> getSayFriendsInfoService(UserLogin userlogin){
		List<SayFriends> sayfriends = new ArrayList<SayFriends>();
		StringBuffer sb = new StringBuffer();
		sb.append("select u.Infoid as Infoid,u.username as name,u.usersex as sex,u.userphone as phone,u.useremail as email,u.useraddress as address,s.f_addtime as addtime,u.constellation as cons,u.user_info_id as uid,p.province as province,c.city as city,a.area as area FROM say_friends s LEFT JOIN user_info u on u.Infoid = s.f_id_info LEFT JOIN say_user sy on sy.userid = s.f_id_user LEFT JOIN province p on p.provinceId = u.userprovinceId LEFT JOIN city c on c.cityId = u.usercityId LEFT JOIN area a on a.areaId = u.userareaId where s.f_id_user = ?");
		List<Record> records = Db.find(sb.toString(),userlogin.getUserid());
		for (Record record : records) {
			SayFriends sayfriend = new SayFriends();
			sayfriend.setInfoid(record.getInt("Infoid"));
			sayfriend.setAddtime(record.getDate("addtime"));
			sayfriend.setArea(record.getStr("area"));
			sayfriend.setCity(record.getStr("city"));
			sayfriend.setF_account(record.getStr("phone"));
			sayfriend.setF_address(record.getStr("address"));
			sayfriend.setF_constellation(record.getStr("cons"));
			sayfriend.setF_id_user(record.getLong("uid"));
			sayfriend.setF_name(record.getStr("name"));
			sayfriend.setF_sex(record.getStr("sex"));
			sayfriend.setProvince(record.getStr("province"));
			sayfriend.setF_phone(record.getStr("phone"));
			sayfriend.setF_email(record.getStr("email"));
			sayfriends.add(sayfriend);
		}
		return sayfriends;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
