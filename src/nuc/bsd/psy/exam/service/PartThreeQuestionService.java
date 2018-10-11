package nuc.bsd.psy.exam.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

import nuc.bsd.psy.base.model.Paper;
import nuc.bsd.psy.base.model.Que;
import nuc.bsd.psy.base.model.User;
import nuc.bsd.psy.tools.DateUtil;

public class PartThreeQuestionService {

	
	public List<Que> getPartThreeQuestions(User user) {
		
				List<Que> ques = new ArrayList<Que>();
				String startTime = DateUtil.format(new Date());
				user.setStartTime(startTime);
				StringBuffer sb = new StringBuffer();
				sb.append("select DISTINCT b.id as recId,b.content as stem,b.question_code as code,b.option_number as optionNumber ,part from test_table a left join question_bank b on a.question_code = b.question_code where a.EC_code = ? and a.option_number = 7 and part > 2 and part < 40");	
				List<Record> records = Db.find(sb.toString(), user.getPaperCode());
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
	public boolean savePartThreeAnswers(List<Paper> papers) {
		StringBuffer sb = new StringBuffer();
		sb.append("insert into answer(paperCode,stuId,queCode,queAns,queSeq,submitTime,schoolId,gradeId,classId,startTime) values(?,?,?,?,?,?,?,?,?,?)");
		Object[][]paras = new Object[papers.size()][10];
		int i = 0;
		String currentTime = DateUtil.format(new Date());
		for(Paper paper : papers) {
			paras[i]=new Object[] {paper.getPaperCode(),paper.getStuId(),paper.getQueCode(),paper.getQueAns(),paper.getQueSeq(),currentTime,paper.getSchoolId(),paper.getGradeId(),paper.getClassId(),paper.getStartTime()};
			i++;
		}
		int[] results = Db.batch(sb.toString(), paras, papers.size());
		return true;
	}

}
