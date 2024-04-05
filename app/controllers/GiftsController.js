import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";




export class GiftsController {
	constructor() {
		console.log('🎁🎮 loaded');
		AppState.on('gifts', this.drawGifts)
		AppState.on('account', this.getGift)
	}

	drawGifts() {
		let giftContent = ''
		AppState.gifts.forEach(gift => giftContent += gift.GiftTemplate)
		setHTML('gifts', giftContent)
	}


	async getGift() {
		try {
			await giftsService.getGifts()

		} catch (error) {
			Pop.error(error)
		}

	}

	async openGift(id) {
		try {
			await giftsService.openGift(id)
		} catch (error) {
			Pop.error(error)
		}
	}












}