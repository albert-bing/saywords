package nuc.bsd.psy.base.model;
/**
 * 用于添加用户是存储信息
 * @author bing
 *
 */
public class AddFriendInfo {
	private int infoid;// 用户信息id
	private long userid;// 用户账号id
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

	
}
