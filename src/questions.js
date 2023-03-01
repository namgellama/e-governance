const questions = [
	{
		_id: 1,
		titleNepali: 'जेब्रा क्रसिङको उपयोग के हो ?',
		titleEnglish: 'What is the use of zebra crossing ?',
		answerNepali: 'पैदल यात्रीले बाटो काट्न',
		answerEnglish: 'For the pedestrians to cross the road',
		answersNepali: [
			'उभिन',
			'पैदल यात्रीले बाटो काट्न',
			'सवारी साधन रोक्न',
			'सवारी साधन कुदाउँन',
		],
		answersEnglish: [
			'Stand',
			'For the pedestrians to cross the road',
			'Stop the vehicle',
			'Run the vehicle',
		],
	},
	{
		_id: 2,
		titleNepali: 'बढी उकालोमा सवारी चलाउँदा कुन गियर चलाउनु पर्छ् ?',
		titleEnglish: 'Which gear should we use while going in an inclined path ?',
		answerNepali: 'एक गियरमा',
		answerEnglish: 'One gear',
		answersNepali: ['एक गियरमा', 'दई गियरमा', 'तीन गियरमा', 'चार गियरमा'],
		answersEnglish: ['One gear', 'Two gear', 'Three gear', 'Four gear'],
	},
	{
		_id: 3,
		titleNepali: 'ओभरटेक गर्दा कुन साइडबाट गर्नुपर्छ् ?',
		titleEnglish: 'From which side, should we overtake ?',
		answerNepali: 'दायाँ साइडबाट',
		answerEnglish: 'Right side',
		answersNepali: [
			'बायाँ साइडबाट',
			'दायाँ साइडबाट',
			'दबुैसाइडबाट',
			'माथिको सबै',
		],
		answersEnglish: [
			'Left side',
			'Right side',
			'Both side',
			'All of the above',
		],
	},
	{
		_id: 4,
		titleNepali: 'नेपालमा सडकको कुन छेउमा मानिसले सवारी चलाउँछन् ?',
		titleEnglish:
			'On which side of the road do people drive their vehicle in Nepal ?',
		answerNepali: 'बायाँ साइडबाट',
		answerEnglish: 'Left side',
		answersNepali: [
			'दायाँ साइडबाट',
			'बायाँ साइडबाट',
			'जुन पक्ष उपलब्ध छ',
			'माथिको कुनै पनि हैन​',
		],
		answersEnglish: [
			'Right side',
			'Left side',
			'Whatever side available',
			'None of the above',
		],
	},
];

export default questions;
