package nuc.bsd.psy.exam.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

import nuc.bsd.psy.base.model.Paper;
import nuc.bsd.psy.base.model.Que;
import nuc.bsd.psy.base.model.User;
import nuc.bsd.psy.domain.DbTester;
import nuc.bsd.psy.tools.DateUtil;

public class PartFiveQuestionService {

	
	public List<Que> getPartFiveQuestions(User user) {
		
				List<Que> ques = new ArrayList<Que>();
				String startTime = DateUtil.format(new Date());
				user.setStartTime(startTime);
				StringBuffer sb = new StringBuffer();
				//if("1".equals(user.getOption_n())){
					//sb.append("select DISTINCT b.id as recId,b.content as stem,b.question_code as code,b.option_number as optionNumber ,part from test_table a left join question_bank b on a.question_code = b.question_code where a.EC_code = ? and a.option_number = 4 and part = 40 and op_type_F = 1");	
				//}else{
					sb.append("select DISTINCT b.id as recId,b.content as stem,b.question_code as code,b.option_number as optionNumber ,part from test_table a left join question_bank b on a.question_code = b.question_code where a.EC_code = ? and a.option_number = 4 and part = 40 and op_type_G = 1");	
				//}
				/*List<Record> records = Db.find(sb.toString(), user.getStuId());*/
				List<Record> records = Db.find(sb.toString(),user.getPaperCode());
				for(Record record : records) {
					Que que = new Que();
					que.setRecId(record.getInt("recId"));
					que.setCode(record.getStr("code"));
					que.setStem(record.getStr("stem"));
					que.setOptionNumber(record.getInt("optionNumber"));
					que.setPart(record.getInt("part"));
					que.setAns(0);
					ques.add(que);
				}
				return ques;
	}
	/*public void getUser(User user) {
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
		sb.append("select EC_code as paperCode from assigned_assessment_table a , student stu , user us where  us.studentNO = stu.studentNO and  a.classID = stu.classID and stu.studentNO = ?");
		record = Db.findFirst(sb.toString(),user.getStuId());
		if(record !=null) {
			user.setPaperCode(record.getStr("paperCode"));
		}
		}
	}*/
	public boolean savePartFiveAnswers(List<Paper> papers) {
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

}
