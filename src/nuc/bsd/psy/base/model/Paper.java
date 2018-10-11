package nuc.bsd.psy.base.model;

public class Paper{

	
	private String paperCode; //测评组合编码
	private String stuId;
	private String queCode;//题目的编号
	private int queAns;//题目的答案
	private int queSeq;
	private String schoolId;
	private String gradeId;
	private String classId;
	private String startTime;
	public String getSchoolId() {
		return schoolId;
	}
	public void setSchoolId(String schoolId) {
		this.schoolId = schoolId;
	}
	public String getGradeId() {
		return gradeId;
	}
	public void setGradeId(String gradeId) {
		this.gradeId = gradeId;
	}
	public String getClassId() {
		return classId;
	}
	public void setClassId(String classId) {
		this.classId = classId;
	}
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getPaperCode() {
		return paperCode;
	}
	public void setPaperCode(String paperCode) {
		this.paperCode = paperCode;
	}
	public String getStuId() {
		return stuId;
	}
	public void setStuId(String string) {
		this.stuId = string;
	}
	public String getQueCode() {
		return queCode;
	}
	public void setQueCode(String queCode) {
		this.queCode = queCode;
	}
	public int getQueAns() {
		return queAns;
	}
	public void setQueAns(int queAns) {
		this.queAns = queAns;
	}
	public int getQueSeq() {
		return queSeq;
	}
	public void setQueSeq(int queSeq) {
		this.queSeq = queSeq;
	}
	
}
