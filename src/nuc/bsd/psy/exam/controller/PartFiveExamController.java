package nuc.bsd.psy.exam.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import nuc.bsd.psy.base.model.Paper;
import nuc.bsd.psy.base.model.Que;
import nuc.bsd.psy.base.model.User;
import nuc.bsd.psy.exam.service.PartFiveQuestionService;

import com.jfinal.core.Controller;
import com.jfinal.kit.HttpKit;
import com.jfinal.log.Log;

public class PartFiveExamController extends Controller {
	private final static Logger LOGGER = Logger.getLogger(PartFiveExamController.class);
    private final static Log LOG = Log.getLog(PartFiveExamController.class);

	// 获取所有的试题
	public void reqPartFive() {
		LOGGER.info("log4j info1"+"提取题目--家长卷");
        LOG.debug("log4j debug2");
        renderText("log");
		User user = getSessionAttr("user");
		List<Que> ques = new PartFiveQuestionService().getPartFiveQuestions(user);
		renderJson(ques);
	}
	public void sendPBIntro3(){
		render("/Views/PartFive/pbIntro3.html");
	}
	public void sendPBTest(){
		render("/Views/PartFour/pbTest_p.html");
	}
	// 提交试卷
	public void submitPaper(){
		boolean isSuccess = true;
		try {
		User user = getSessionAttr("user");
		String jsonStr = HttpKit.readData(getRequest());
		List<Paper> papers = new ArrayList<Paper>();
		if(jsonStr!=null && jsonStr.length()!=0 && jsonStr.length()!=3){		
		String[] ans = jsonStr.substring(1, jsonStr.length()-2).split(",");
		for(int i=0; i<ans.length; i++){
			Paper paper = new Paper();
			paper.setPaperCode(user.getPaperCode());
			paper.setStuId(user.getStuId());
			paper.setSchoolId(user.getSchoolId());
			paper.setGradeId(user.getGradeId());
			paper.setClassId(user.getClassId());
			paper.setStartTime(user.getStartTime());
			String[] tmp = ans[i].substring(1,ans[i].length()-1).split(":");
			paper.setQueCode(tmp[0]);
			paper.setQueAns(Integer.parseInt(tmp[1]));
			papers.add(paper);
		}
			new PartFiveQuestionService().savePartFiveAnswers(papers);
		}
		LOGGER.info("log4j info1=="+user.getAccount()+"提交试卷--家长卷");
        LOG.debug("log4j debug2");
        renderText("log");
		}catch(Exception ex) {
			isSuccess = false;
			ex.printStackTrace();
			
		}
		
		if (isSuccess == true) {
			setAttr("code", 0);
		}else if(isSuccess == false) {
			
			setAttr("code", 1);
		}
		
		renderJson();
	}
	 
}
