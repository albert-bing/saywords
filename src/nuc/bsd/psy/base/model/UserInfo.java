package nuc.bsd.psy.base.model;
/**
 * User的基本信息
 * @author bing
 *
 */
public class UserInfo {
	private int infoid;// 用户的信息id
	private long userid;// 用户账户id
	private String username;// 用户的姓名
	private String usersex;// 用户的性别
	private String userphone;// 用户的电话
	private String useremail;// 用户的邮件
	private	String userprovinceId;// 用户所在省份
	private String usercityId;// 用户所在城市
	private String userareaId;// 用户所在地区
	private String useraddress;// 用户所在详细地址
	private String province;// 所在省份
	private String city;// 所在城市
	private String area;// 所在地区
	

	public int getInfoid() {
		return infoid;
	}
	public void setInfoid(int infoid) {
		this.infoid = infoid;
	}
	public long getUserid() {
		return userid;
	}
	public void setUserid(long userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUsersex() {
		return usersex;
	}
	public void setUsersex(String usersex) {
		this.usersex = usersex;
	}
	public String getUserphone() {
		return userphone;
	}
	public void setUserphone(String userphone) {
		this.userphone = userphone;
	}
	public String getUseremail() {
		return useremail;
	}
	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}
	public String getUserprovinceId() {
		return userprovinceId;
	}
	public void setUserprovinceId(String userprovinceId) {
		this.userprovinceId = userprovinceId;
	}
	public String getUsercityId() {
		return usercityId;
	}
	public void setUsercityId(String usercityId) {
		this.usercityId = usercityId;
	}
	public String getUserareaId() {
		return userareaId;
	}
	public void setUserareaId(String userareaId) {
		this.userareaId = userareaId;
	}
	public String getUseraddress() {
		return useraddress;
	}
	public void setUseraddress(String useraddress) {
		this.useraddress = useraddress;
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
		return "UserInfo [username=" + username + ", usersex=" + usersex
				+ ", userphone=" + userphone + ", useremail=" + useremail
				+ ", userprovinceId=" + userprovinceId + ", usercityId="
				+ usercityId + ", userareaId=" + userareaId + ", useraddress="
				+ useraddress + ", province=" + province + ", city=" + city
				+ ", area=" + area + "]";
	}
	
}
