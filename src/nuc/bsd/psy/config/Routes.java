package nuc.bsd.psy.config;

import nuc.bsd.psy.exam.controller.PartFiveExamController;
import nuc.bsd.psy.exam.controller.PartFourExamController;
import nuc.bsd.psy.exam.controller.PartOneExamController;
import nuc.bsd.psy.exam.controller.PartThreeExamController;
import nuc.bsd.psy.exam.controller.PartTwoExamController;

/**
 * 所有的路由配置文件
 * @author Simple
 *
 */
public class Routes extends com.jfinal.config.Routes{

	@Override
	public void config() {
		// TODO Auto-generated method stub
		
		add("/partone", PartOneExamController.class, "/PartOne");
		add("/parttwo", PartTwoExamController.class, "/PartTwo");
		add("/partthree", PartThreeExamController.class, "/PartThree");
		add("/partfour", PartFourExamController.class, "/PartFour");
		add("/partfive", PartFiveExamController.class, "/PartFive");
	}

}
