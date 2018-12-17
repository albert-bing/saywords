package nuc.bsd.psy.base.model;
/**
 * 用户的登录数据
 */
public class UserLogin {
	
	
	private long userid;// 用户ID
	private String useraccount;// 用户账户
	private String userpass;// 用户密码
	public long getUserid() {
		return userid;
	}
	public void setUserid(long userid) {
		this.userid = userid;
	}
	public String getUseraccount() {
		return useraccount;
	}
	public void setUseraccount(String useraccount) {
		this.useraccount = useraccount;
	}
	public String getUserpass() {
		return userpass;
	}
	public void setUserpass(String userpass) {
		this.userpass = userpass;
	}
	@Override
	public String toString() {
		return "UserLogin [userid=" + userid + ", useraccount=" + useraccount
				+ ", userpass=" + userpass + "]";
	}
	
	
}
