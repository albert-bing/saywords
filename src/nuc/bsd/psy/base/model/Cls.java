package nuc.bsd.psy.base.model;

public class Cls {
		
		
		
		// 账号和密码
		private String username;
		private String password;
		// 学生基本信息
		private String ec_code;//量表编码
		private String schoolname;// 学校名称
		private String name;// 姓名
		private String gender;// 性别
		private String birthday;// 生日
		private String grade;// 年级
		private String clsname;// 班级
		private String studentNO;// 学号
		private int part;//模块号
		public int getPart() {
			return part;
		}
		public void setPart(int part) {
			this.part = part;
		}
		public String getEc_code() {
			return ec_code;
		}
		public void setEc_code(String ec_code) {
			this.ec_code = ec_code;
		}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getSchoolname() {
		return schoolname;
	}
	public void setSchoolname(String schoolname) {
		this.schoolname = schoolname;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getClsname() {
		return clsname;
	}
	public void setClsname(String clsname) {
		this.clsname = clsname;
	}
	public String getStudentNO() {
		return studentNO;
	}
	public void setStudentNO(String studentNO) {
		this.studentNO = studentNO;
	}	
}
