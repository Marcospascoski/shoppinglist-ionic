import { Injectable } from '@angular/core'
import { Category } from '../models/category'
import { Product } from '../models/product'
import { Item } from '../models/item'

@Injectable()
export class DatabaseService
{
	private categoriesList: Category[]
	private productsList: Product[]
	private itemsList: Item[]

	constructor()
	{
		this.categoriesList = [
			Category.CATEGORY_BEVERAGES,
			Category.CATEGORY_BREAD_AND_GRAIN_PRODUCTS,
			Category.CATEGORY_CONDIMENTS_AND_OTHERS,
			Category.CATEGORY_FROZEN,
			Category.CATEGORY_FRUITS_AND_VEGETABLES,
			Category.CATEGORY_HOUSEHOLD,
			Category.CATEGORY_MEAT_AND_FISH,
			Category.CATEGORY_MILK_AND_CHEESE
		]

		this.productsList = [
			Product.PRODUCT_BEER,
			Product.PRODUCT_COFFEE,
			Product.PRODUCT_SODA,
			Product.PRODUCT_WATER,
			Product.PRODUCT_ICE_TEA,

			Product.PRODUCT_BAGUETTE,
			Product.PRODUCT_CEREALS,
			Product.PRODUCT_PASTA,
			Product.PRODUCT_RICE,
			Product.PRODUCT_RISOTTO,
			Product.PRODUCT_SLICED_BREAD,

			Product.PRODUCT_COFFEE_CREAM,
			Product.PRODUCT_CORN,
			Product.PRODUCT_OIL,
			//Product.PRODUCT_RICOLA,
			Product.PRODUCT_SALT,
			Product.PRODUCT_SOUP,
			Product.PRODUCT_SUGAR,
			Product.PRODUCT_TOMATO_SAUCE,

			Product.PRODUCT_FISH_STICKS,
			Product.PRODUCT_LASAGNA,
			Product.PRODUCT_NUGGETS,
			Product.PRODUCT_PIZZA,

			Product.PRODUCT_BANANAS,
			Product.PRODUCT_CARROTS,
			//Product.PRODUCT_ONION,
			Product.PRODUCT_POTATOES,

			Product.PRODUCT_AIR_FRESHENER,
			Product.PRODUCT_BLEACH,
			Product.PRODUCT_BULB,
			Product.PRODUCT_CLEANING_SUPPLIES,
			Product.PRODUCT_COTTON_SWABS,
			Product.PRODUCT_DEODORANT,
			Product.PRODUCT_DISHWASHING_LIQUID,
			Product.PRODUCT_GARBAGE_BAGS,
			Product.PRODUCT_HAIR_REMOVER,
			Product.PRODUCT_KITCHEN_RAGS,
			Product.PRODUCT_LAUNDRY_DETERGENT,
			Product.PRODUCT_PAPER_TOWELS,
			Product.PRODUCT_RAZOR,
			Product.PRODUCT_SHAMPOO,
			Product.PRODUCT_SHAVING_FOAM,
			Product.PRODUCT_SHOWER_GEL,
			Product.PRODUCT_SOAP,
			Product.PRODUCT_SPONGE,
			Product.PRODUCT_SPONGE_METAL,
			//Product.PRODUCT_SWIFFER,
			Product.PRODUCT_TOILET_PAPER,
			Product.PRODUCT_TOOTHBRUSH,
			Product.PRODUCT_TOOTHPASTE,

			Product.PRODUCT_CHICKEN,
			Product.PRODUCT_FISH,
			Product.PRODUCT_HAM,
			Product.PRODUCT_MEAT,
			Product.PRODUCT_PORK,
			Product.PRODUCT_TUNA,

			Product.PRODUCT_CHEESE,
			Product.PRODUCT_EGGS,
			Product.PRODUCT_GRATED_CHEESE,
			Product.PRODUCT_MILK,
			Product.PRODUCT_YOGURT
		]

		this.itemsList = [
			new Item(Product.PRODUCT_AIR_FRESHENER, false),
			new Item(Product.PRODUCT_BANANAS, false),
			new Item(Product.PRODUCT_COFFEE, false),
			new Item(Product.PRODUCT_CEREALS, false),
			new Item(Product.PRODUCT_HAIR_REMOVER, false),
			new Item(Product.PRODUCT_PAPER_TOWELS, false),
			new Item(Product.PRODUCT_SHAVING_FOAM, false),
			new Item(Product.PRODUCT_TOMATO_SAUCE, false),
			new Item(Product.PRODUCT_BLEACH, false),
			new Item(Product.PRODUCT_CORN, false)
		]
	}

	// -------------------------------------------------------------

	public categories(): Category[]
	{
		return this.categoriesList.sort((c1, c2) => c1.name.localeCompare(c2.name))
	}

	public products(): Product[]
	{
		return this.productsList
					.filter((product) => !this.itemsList.find((item) => item.product == product))
					.sort((p1, p2) => p1.name.localeCompare(p2.name))
	}

	public items(): Item[]
	{
		return this.itemsList.sort((i1, i2) => i1.product.name.localeCompare(i2.product.name))
	}

	// -------------------------------------------------------------

	public renameCategory(category: Category, name: string)
	{
		// TODO: check if no other category with that name

		category.name = name

		// TODO: update database
	}

	public removeCategory(category: Category)
	{
		// TODO: check if category is not empty

		this.categoriesList.remove(category)
	}

	// -------------------------------------------------------------

	public removeProduct(product: Product)
	{
		return this.productsList.remove(product)

		// TODO: update database
	}

	// -------------------------------------------------------------

	public removeItem(item: Item)
	{
		return this.itemsList.remove(item)

		// TODO: update database
	}

	public addItem(product: Product)
	{
		this.itemsList.push(new Item(product, false))

		// TODO: update database
	}
}