
export class SurveyPoll {
    constructor(
        public name: string = "",        
        public survey_question: string = "",        
        public option_1: string = "",  
        public option_1_count: number = 0,  
        public option_2: string = "",  
        public option_2_count: number = 0,  
        public option_3: string = "",  
        public option_3_count: number = 0,  
        public option_4: string = "",  
        public option_4_count: number = 0,  
        public createdAt: any = "",
        public updatedAt: any = "",
        
    ){}
}
