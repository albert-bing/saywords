package nuc.bsd.psy.base.model;

import java.util.Date;



/**
 * 用户自己所发布的密语
 * @author bing
 *
 */
public class Saywords {
	private long say_user_id;// 与用户关联的字段
	private String images_path;// 图片路径
	private int class_num;// 密语分类的分类编号
	private String content;// 具体的内容
	private Date publish_time;// 发布时间
	public long getSay_user_id() {
		return say_user_id;
	}
	public void setSay_user_id(long say_user_id) {
		this.say_user_id = say_user_id;
	}
	public String getImages_path() {
		return images_path;
	}
	public void setImages_path(String images_path) {
		this.images_path = images_path;
	}
	public int getClass_num() {
		return class_num;
	}
	public void setClass_num(int class_num) {
		this.class_num = class_num;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Date getPublish_time() {
		return publish_time;
	}
	public void setPublish_time(Date date) {
		this.publish_time = date;
	}
	@Override
	public String toString() {
		return "saywords [images_path=" + images_path + ", class_num="
				+ class_num + ", content=" + content + ", publish_time="
				+ publish_time + "]";
	}
	
}
