import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js"





class GiftsService {

	async getGifts() {
		const response = await api.get('api/gifts')
		console.log('get gift working', response.data);
		AppState.gifts = response.data.map(gift => new Gift(gift))
	}

	async openGift(id) {
		const gift = AppState.gifts.find(foundGift => foundGift.id == id)
		if (gift.opened) return
		gift.opened = true
		const response = await
	}




}

export const giftsService = new GiftsService()