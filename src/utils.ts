import { NewDiaryEntry, Weather, Visibility } from "./types";

const parseComment = (commentFromRequest: any): string => {
	if(!isString(commentFromRequest)) throw new Error('Incorrect')
	return commentFromRequest
}

const isString = (string: string): boolean => {
	return typeof string === 'string'
}

const parseDate = (dateFromRequest: any): string => {
	if(!isString(dateFromRequest) || !isDate(dateFromRequest)){
		throw new Error('Incorrect or missing date')
	}
	return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
	if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
		throw new Error('Incorrect or missing Weather')
	}
	return weatherFromRequest
}

const parseVisibility = (VisibilityFromRequest: any): Visibility => {
	if(!isString(VisibilityFromRequest) || !isVisibility(VisibilityFromRequest)) {
		throw new Error('Incorrect or missing visibility')
	}
	return VisibilityFromRequest
} 

const isWeather = (param: any): boolean => {
	return Object.values(Weather).includes(param )
}

const isDate = (date: string): boolean => {
	return Boolean(Date.parse(date))
}

const isVisibility = (param: any): boolean => {
	return Object.values(Visibility).includes(param)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {  
    const newEntry: NewDiaryEntry = {
			comment: parseComment(object.comment),
			date: parseDate(object.date),
			weather: parseWeather(object.weather),
			visibility: parseVisibility(object.visibility)
		}
		return newEntry
}

export default toNewDiaryEntry