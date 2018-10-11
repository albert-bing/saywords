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

public class PartTwoQuestionService {

	
	public List<Que> getPartTwoQuestions(User user) {
		
				List<Que> ques = new ArrayList<Que>();
				
				StringBuffer sb = new StringBuffer();
				sb.append("select distinct b.id as recId,b.content as stem,b.question_code as code,b.option_number as optionNumber from test_table a left join question_bank b on a.question_code = b.question_code where a.EC_code = ? and a.option_number = 4");	
				List<Record> records = Db.find(sb.toString(), user.getPaperCode());
				for(Record record : records) {
					Que que = new Que();
					que.setRecId(record.getInt("recId"));
					que.setCode(record.getStr("code"));
					que.setStem(record.getStr("stem"));
					que.setOptionNumber(record.getInt("optionNumber"));
					que.setAns(0);
					ques.add(que);
				}
				return ques;
	}
	public boolean savePartTwoAnswers(List<Paper> papers) {
		StringBuffer sb = new StringBuffer();
		sb.append("insert into answer(paperCode,stuId,queCode,queAns,submitTime,schoolId,gradeId,classId,startTime) values(?,?,?,?,?,?,?,?,?)");
		Object[][]paras = new Object[papers.size()][9];
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
