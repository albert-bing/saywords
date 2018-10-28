package nuc.bsd.psy.exam.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;
import nuc.bsd.psy.base.model.Cls;
import nuc.bsd.psy.base.model.Paper;
import nuc.bsd.psy.base.model.Que;
import nuc.bsd.psy.base.model.User;
import nuc.bsd.psy.domain.DbTester;
import nuc.bsd.psy.tools.DateUtil;

public class PartOneQuestionService {

	public List<Cls> getSchool(Cls cls,User user) {
		List<Cls> ques = new ArrayList<Cls>();
		StringBuffer sb = new StringBuffer();
		sb.append("select studentNO , name, gender, birthday,schoolName,class as classname,grade from student s where studentNO = ?");	
		Record records = Db.findFirst(sb.toString(),user.getStuId());
		if(records!=null){
			cls.setStudentNO(records.getStr("studentNO"));
			cls.setName(records.getStr("name"));
			cls.setGender(records.getStr("gender"));
			cls.setBirthday(records.getStr("birthday"));
			cls.setSchoolname(records.getStr("schoolName"));
			cls.setClsname(records.getStr("classname"));
			cls.setGrade(records.getStr("grade"));
			cls.setPart(user.getPart());
			//System.out.println(user.getPart());
			//cls.setEc_code(user.getPaperCode());
			
			ques.add(cls);
		}
		return ques;
	}
	public void getUser(User user) {
		StringBuffer sb = new StringBuffer();
		sb.append("select u.id as recId, user_account as account,user_pass as pass, u.studentNO as stuId ,schoolId , gradeId ,classId from user u,student s where u.studentNO = s.studentNO and  user_account=? and user_pass=? limit 1");	
		Record	record = Db.findFirst(sb.toString(), user.getAccount(),user.getPass());
		if(record !=null) {
		user.setRecId(record.getInt("recId"));
		user.setAccount(record.getStr("account"));
		user.setPass(record.getStr("pass"));
		user.setStuId(record.getStr("stuId"));
		//System.out.println(user.getStuId());
		user.setClassId(record.getStr("classId"));
		user.setGradeId(record.getStr("gradeId"));
		user.setSchoolId(record.getStr("schoolId"));
		sb.delete(0, sb.length());
		sb.append("SELECT DISTINCT aa.EC_code as paperCode, part from test_table tt,question_bank qb ,student stu , assigned_assessment_table aa where tt.question_code = qb.question_code and aa.classID = stu.classID and tt.EC_code = aa.EC_code and stu.studentNO = ? ORDER BY part limit 0,1");
		record = Db.findFirst(sb.toString(),user.getStuId());
		if(record !=null) {
			user.setPaperCode(record.getStr("paperCode"));
			user.setPart(record.getInt("part"));
			//System.out.println(user.getPart());
		}
		}
	}
	public List<Que> getPartOneQuestions(User user) {
		
				List<Que> ques = new ArrayList<Que>();
				String startTime = DateUtil.format(new Date());
				user.setStartTime(startTime);
				//System.out.println(startTime);
				StringBuffer sb = new StringBuffer();
				sb.append("select distinct b.id as recId,b.content as stem,b.question_code as code,b.option_number as optionNumber from test_table a left join question_bank b on a.question_code = b.question_code where a.EC_code = ? and a.option_number = 2 ");	
				List<Record> records = Db.find(sb.toString(), user.getPaperCode());
				//System.out.println(user.getPaperCode());
				for(Record record : records) {
					Que que = new Que();
					que.setRecId(record.getInt("recId"));
					que.setCode(record.getStr("code"));
					que.setStem(record.getStr("stem"));
					que.setOptionNumber(record.getInt("optionNumber"));
					//que.setEc_code(user.getPaperCode());
					
					que.setAns(0);
					que.setSeq(0);
					ques.add(que);
				}
				return ques;
	}
	public boolean savePartOneAnswers(List<Paper> papers) {
		StringBuffer sb = new StringBuffer();
		sb.append("insert into answer(paperCode,stuId,queCode,queAns,submitTime,schoolId,gradeId,classId,startTime) values(?,?,?,?,?,?,?,?,?)");
		Object[][]paras = new Object[papers.size()][10];
		int i = 0;
		String currentTime = DateUtil.format(new Date());
		for(Paper paper : papers) {
			paras[i]=new Object[] {paper.getPaperCode(),paper.getStuId(),paper.getQueCode(),paper.getQueAns(),currentTime,paper.getSchoolId(),paper.getGradeId(),paper.getClassId(),paper.getStartTime()};
			i++;
		}
		int[] results = Db.batch(sb.toString(), paras, papers.size());
		return true;
	}
	public List<DbTester> getUserToTester(String id_card){
		//SELECT exam.`name`,exam.`sex`,exam.`id_card`,exam.`school`,exam.`img` FROM db_examer exam LEFT JOIN db_pc pc ON exam.`pc_id`=pc.`id` AND pc.`IP`='127.0.0.1'
		StringBuffer sb = new StringBuffer();
		sb.append(" SELECT exam.`name`,exam.`sex`,exam.`id_card`,exam.`school`,exam.`grade`,exam.`cls`,exam.`img` FROM db_tester exam where exam.`id_card`='"+id_card+"'");
		System.out.println(sb.toString()+"<<<>>>");
		List<DbTester> tester = DbTester.dao.find(sb.toString());
		return tester;
	}
}
