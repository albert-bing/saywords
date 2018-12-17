package nuc.bsd.psy.base.model;

import java.util.Date;

/**
 * 用户的好友信息
 * @author bing
 *
 */
public class SayFriends {
	

	
	private int infoid;// 用户的信息id
	private String f_name;// 好友姓名
	private String f_sex;// 好友性别
	private String f_phone;// 好友电话
	private String f_email;// 好友邮箱
	private String f_constellation;// 好友星座
	private String f_account;// 好友账号
	private Date addtime;// 添加好友时间
	private long f_id_user;// 关联的用户的账户id
	private String f_provinceId;// 省份id
	private String f_cityId;// 城市id
	private String f_areaId;// 地区id
	private String f_address;// 所在地区
	private String province;// 所在省份
	private String city;// 所在城市
	private String area;// 所在地区
	public int getInfoid() {
		return infoid;
	}
	public void setInfoid(int infoid) {
		this.infoid = infoid;
	}
	public String getF_phone() {
		return f_phone;
	}
	public void setF_phone(String f_phone) {
		this.f_phone = f_phone;
	}
	public String getF_email() {
		return f_email;
	}
	public void setF_email(String f_email) {
		this.f_email = f_email;
	}
	public String getF_name() {
		return f_name;
	}
	public void setF_name(String f_name) {
		this.f_name = f_name;
	}
	public String getF_sex() {
		return f_sex;
	}
	public void setF_sex(String f_sex) {
		this.f_sex = f_sex;
	}
	public String getF_constellation() {
		return f_constellation;
	}
	public void setF_constellation(String f_constellation) {
		this.f_constellation = f_constellation;
	}
	public String getF_account() {
		return f_account;
	}
	public void setF_account(String f_account) {
		this.f_account = f_account;
	}
	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}
	public long getF_id_user() {
		return f_id_user;
	}
	public void setF_id_user(long f_id_user) {
		this.f_id_user = f_id_user;
	}
	public String getF_provinceId() {
		return f_provinceId;
	}
	public void setF_provinceId(String f_provinceId) {
		this.f_provinceId = f_provinceId;
	}
	public String getF_cityId() {
		return f_cityId;
	}
	public void setF_cityId(String f_cityId) {
		this.f_cityId = f_cityId;
	}
	public String getF_areaId() {
		return f_areaId;
	}
	public void setF_areaId(String f_areaId) {
		this.f_areaId = f_areaId;
	}
	public String getF_address() {
		return f_address;
	}
	public void setF_address(String f_address) {
		this.f_address = f_address;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	@Override
	public String toString() {
		return "SayFriends [f_name=" + f_name + ", f_sex=" + f_sex
				+ ", f_phone=" + f_phone + ", f_email=" + f_email
				+ ", f_constellation=" + f_constellation + ", f_account="
				+ f_account + ", addtime=" + addtime + ", f_id_user="
				+ f_id_user + ", f_provinceId=" + f_provinceId + ", f_cityId="
				+ f_cityId + ", f_areaId=" + f_areaId + ", f_address="
				+ f_address + ", province=" + province + ", city=" + city
				+ ", area=" + area + "]";
	}
	
	
}
