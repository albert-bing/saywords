package nuc.bsd.psy.base.model;

public class Que {

	
	
	
	
	private int recId;
	private int part;//量表编码
	private String code;//题目的编号
	private String stem;//题干
	private int optionNumber;//选项个数
	private int ans;//答案
	private int seq;
	
	public int getRecId() {
		return recId;
	}
	public void setRecId(int recId) {
		this.recId = recId;
	}
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getStem() {
		return stem;
	}
	public void setStem(String stem) {
		this.stem = stem;
	}
	public int getOptionNumber() {
		return optionNumber;
	}
	public void setOptionNumber(int optionNumber) {
		this.optionNumber = optionNumber;
	}
	public int getAns() {
		return ans;
	}
	public void setAns(int ans) {
		this.ans = ans;
	}
	public int getPart() {
		return part;
	}
	public void setPart(int part) {
		this.part = part;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	
	
}
