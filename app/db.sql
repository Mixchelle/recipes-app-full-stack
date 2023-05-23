CREATE DATABASE  IF NOT EXISTS `RECIPES_APP` ;

USE `RECIPES_APP`;
DROP TABLE IF EXISTS `drinks_categories`;
CREATE TABLE `drinks_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `drinks_categories` (`name`)  VALUES
  ("Ordinary Drink"), ("Cocktail"), ("Shake"),
  ("Other \/ Unknown"), ("Cocoa"),("Shot"),
  ("Coffee \/ Tea"), ("Homemade Liqueur"), ("Punch \/ Party Drink"),
  ("Beer"), ("Soft Drink");

DROP TABLE IF EXISTS `drinks_ingredients`;
CREATE TABLE `drinks_ingredients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `drinks_ingredients` (`name`)  VALUES
  ("Light rum"),("Applejack"),("Gin"),("Dark rum"),("Sweet Vermouth"),
  ("Strawberry schnapps"),("Scotch"),("Apricot brandy"),("Triple sec"),("Southern Comfort"),
  ("Orange bitters"),("Brandy"),("Lemon vodka"),("Blended whiskey"),("Dry Vermouth"),
  ("Amaretto"),("Tea"),("Champagne"),("Coffee liqueur"),("Bourbon"),
  ("Tequila"),("Vodka"),("A\u00f1ejo rum"),("Bitters"),("Sugar"),
  ("Kahlua"),("demerara Sugar"),("Dubonnet Rouge"),("Watermelon"),("Lime juice"),
  ("Irish whiskey"),("Apple brandy"),("Carbonated water"),("Cherry brandy"),("Creme de Cacao"),
  ("Grenadine"),("Port"),("Coffee brandy"),("Red wine"),("Rum"),
  ("Grapefruit juice"),("Ricard"),("Sherry"),("Cognac"),("Sloe gin"),
  ("Apple juice"),("Pineapple juice"),("Lemon juice"),("Sugar syrup"),("Milk"),
  ("Strawberries"),("Chocolate syrup"),("Yoghurt"),("Mango"),("Ginger"),
  ("Lime"),("Cantaloupe"),("Berries"),("Grapes"),("Kiwi"),
  ("Tomato juice"),("Cocoa powder"),("Chocolate"),("Heavy cream"),("Galliano"),
  ("Peach Vodka"),("Ouzo"),("Coffee"),("Spiced rum"),("Water"),
  ("Espresso"),("Angelica root"),("Orange"),("Cranberries"),("Johnnie Walker"),
  ("Apple cider"),("Everclear"),("Cranberry juice"),("Egg yolk"),("Egg"),
  ("Grape juice"),("Peach nectar"),("Lemon"),("Firewater"),("Lemonade"),
  ("Lager"),("Whiskey"),("Absolut Citron"),("Pisco"),("Irish cream"),
  ("Ale"),("Chocolate liqueur"),("Midori melon liqueur"),("Sambuca"),("Cider"),
  ("Sprite"),("7-Up"),("Blackberry brandy"),("Peppermint schnapps"),("Creme de Cassis"), 
  ("Grand Marnier"), ("Wild Turkey"), ("Frangelico"), ("Egg White"), ("Orange juice"), ("Pepsi Cola"),
  ("Peach schnapps"), ("Coca-Cola"), ("Sweet and sour"), ("Vanilla vodka"), ("Blue Curacao"),
  ("Blueberry schnapps"), ("Sour mix"), ("Coconut rum"), ("Ginger beer"), ("Lemon peel"),
  ("Kirschwasser"), ("Strawberry liqueur"), ("Schweppes Russchian"), ("Roses sweetened lime juice"),
  ("Orange Curacao"), ("Ice"), ("Maraschino cherry"), ("White Creme de Menthe"), ("Hot chocolate"),
  ("Angostura Bitters"), ("Soda water"), ("Malibu rum"), ("Cointreau"), ("Coconut liqueur"), ("Vanilla ice-cream"), 
  ("Crown Royal"), ("Cream"), ("Banana"), ("Honey"), ("Godiva liqueur"), ("Butterscotch schnapps"), ("Whipped Cream"),
  ("caramel sauce"), ("chocolate sauce"), ("Mini-snickers bars"), ("Banana liqueur"), ("Chocolate ice-cream"), ("Chocolate milk"), 
  ("Cherry"), ("Pisang Ambon"), ("Bitter lemon"), ("Tonic water"), ("Apple"), ("Cinnamon"), ("Cornstarch"), ("Vanilla"),
  ("Butter"), ("Vanilla extract"), ("Half-and-half"), ("Marshmallows"), ("Salt"),
  ("Orange peel"), ("Nutmeg");


DROP TABLE IF EXISTS `drinks_recipes`;
CREATE TABLE `drinks_recipes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category_id` int NOT NULL,
  `instructions` varchar(655),
  `alcohol` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`category_id`) REFERENCES `drinks_categories` (`id`)
);

INSERT INTO `drinks_recipes` (`name`, `category_id`, `instructions`, `alcohol`, `image`)  VALUES 
  ("GG",1, "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.", "Optional alcohol", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vyxwut1468875960.jpg"),
  ("A1",2, "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.","Alcoholic","https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2x8thr1504816928.jpg"),
  ("252",6,"Add both ingredients to shot glass, shoot, and get drunk quick","Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rtpxqw1468877562.jpg"),
  ("747",6,"pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!","Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xxsxqy1472668106.jpg"),
  ("Kir", 1, "Add the cr\u00e8me de cassis to the bottom of the glass, then top up with wine.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/apneom1504370294.jpg"),
  ("ABC", 6, "Layered in a shot glass.","Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tqpvqp1472668328.jpg"),
  ("Ace", 2, "Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/l3cd7f1504818306.jpg"),
  ("Smut", 9, "Throw it all together and serve real cold.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rx8k8e1504365812.jpg"),
  ("Rose", 1, "Shake together in a cocktail shaker, then strain into chilled glass. Garnish and serve.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/8kxbvq1504371462.jpg"),
  ("B-52", 6, "Layer ingredients into a shot glass. Serve with a stirrer.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5a3vg61504372070.jpg"),
  ("Adam", 1, "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/v0at4i1582478473.jpg"),
  ("ACID", 6, "Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xuxpxt1479209317.jpg"),
  ("3-Mile Long Island Iced Tea", 1, "Fill 14oz glass with ice and alcohol. Fill 2\/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rrtssw1472668972.jpg"),
  ("410 Gone", 1, "" ,"Alcoholic", ""),
  ("50/50", 1, "fill glass with crushed ice. Add vodka. Add a splash of grand-marnier. Fill with o.j.","Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wwpyvr1461919316.jpg"),
  ("501 Blue", 1, "Mix equal amounts into a glass with ice.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ywxwqs1461867097.jpg"),
  ("69 Special", 1, "Pour 2 oz. gin. Add 4 oz. 7-up. Add Lemon Juice for flavor. If you are weak, top up glass with more 7-Up.","Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vqyxqx1472669095.jpg"),
  ("A Day at the Beach", 1, "Shake Rum, Amaretto, and Orange Juice in a shaker filled with ice. Strain over ice into a highball glass. Add Grenadine and garnish with a Pineapple Wedge and a Strawberry.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/trptts1454514474.jpg"),
  ("A Furlong Too Late", 1, "Pour the rum and ginger beer into a highball glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ssxvww1472669166.jpg"),
  ("A midsummernight dream", 1, "Mix the strawberrys in a blender Pour it together with the vodka,kirch and strawberry liquer over ice in a shaker. Shake well and pour in a highballglass. Fill up with the Russchian water", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ysqvqp1461867292.jpg"),
  ("A Night In Old Mandalay", 1, "In a shaker half-filled with ice cubes, combine the light rum, a\u00f1ejo rum, orange juice, and lemon juice. Shake well. Strain into a highball glass almost filled with ice cubes. Top with the ginger ale. Garnish with the lemon twist.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vyrvxt1461919380.jpg"),
  ("155 Belmont", 2, "Blend with ice. Serve in a wine glass. Garnish with carrot.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yqvvqs1475667388.jpg"),
  ("57 Chevy with a White License Plate", 2, "1. Fill a rocks glass with ice 2.add white creme de cacao and vodka 3.stir", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qyyvtu1468878544.jpg"),
  ("747 Drink", 2, "Fill a Collins glass with ice.\r\nPour in vodka, lime cordial, and cranberry juice.\r\nFill up with Sprite.\r\nGarnish with a Lime wheel or some cranberries", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/i9suxb1582474926.jpg"),
  ("9 1\/2 Weeks", 2, "Combine all ingredients in glass mixer. Chill and strain into Cocktail glass. Garnish with sliced strawberry.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xvwusr1472669302.jpg"),
  ("A Gilligan's Island", 2, "Shaken, not stirred!", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wysqut1461867176.jpg"),
  ("A True Amaretto Sour", 2, "Rub the rim of an old fashioned glass with lemon, and dip repeatedly into granulated sugar until it has a good 'frosted' rim. Shake a jigger of Amaretto with the juice of 1\/2 a lemon. Strain into glass and add ice. Garnish with a Marachino Cherry.",  "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rptuxy1472669372.jpg"),
  ("A.D.M. (After Dinner Mint)", 2, "shake vigorously", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ruxuvp1472669600.jpg"),
  ("Absolutely Fabulous", 2, "Mix the Vodka and Cranberry juice together in a shaker and strain into a glass. Top up with Champagne.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/abcpwr1504817734.jpg"),
  ("Abbey Martini", 2, "Put all ingredients into a shaker and mix, then strain contents into a chilled cocktail glass.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2mcozt1504817403.jpg"),
  ("Absolut Summertime", 2, "Add all ingredients except lemon to shaker filled with ice. Cover and shake vigorously. Strain contents into ice filled collins glass. Garnish with lemon.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/trpxxs1472669662.jpg"),
  ("151 Florida Bushwacker", 3, "Combine all ingredients. Blend until smooth. Garnish with chocolate shavings if desired.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rvwrvv1468877323.jpg"),
  ("Avalanche", 3, "Mix in highball glass over ice, shake well.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uppqty1472720165.jpg"),
  ("Baby Eskimo", 3, "Leave ice-cream out for about 10 minutes. Add ingredients in order, stir with chopstick (butter knife or spoon works too). Consume immediately and often. Nice and light, great for following a heavy drink.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wywrtw1472720227.jpg"),
  ("Banana Milk Shake", 3, "Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rtwwsx1472720307.jpg"),
  ("Banana Strawberry Shake", 3, "Blend all together in a blender until smooth.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vqquwx1472720634.jpg"),
  ("Banana Strawberry Shake Daiquiri", 3, "Blend all together in a blender until smooth.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uvypss1472720581.jpg"),
  ("Black Forest Shake", 3, "In a blender put ice cubes, chocolate syrup, cherry brandy, vodka, and milk. Blend very well.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xxtxsu1472720505.jpg"),
  ("Blind Russian", 3, "Fill glass with ice. Add all liquers. Add milk. shake.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wxuqvr1472720408.jpg"),
  ("Boozy Snickers Milkshake", 3, "Place the snickers bars in a plastic bag and roll over them with a rolling pin until crushed. Add crushed snickers pieces, ice cream, milk, caramel sauce, chocolate sauce, and chocolate liquor to a blender. Blend until shake is thick and frothy. Pour into glasses and top with chocolate liquor and whip cream.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/861tzm1504784164.jpg"),
  ("Butter Baby", 3, "Blend together in a blender. Serve in a chilled Beer mug with Fresh Blueberries and caramel for topping.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/1xhjk91504783763.jpg"),
  ("Chocolate Monkey", 3, "blend liqeuors with ice-cream, milk and syrup. pour into parfait glass, top with whipped cream and garnish with banana and cherry.", "Optional alcohol", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tyvpxt1468875212.jpg"),
  ("Jamaica Kiss", 3, "Fill a tumbler with ice cubes. Add a shot of Tia Maria and a shot of Jamaican light rum. Fill the tumbler with milk. Blend until smooth and serve immediately.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/urpvvv1441249549.jpg"),
  ("A Piece of Ass", 4, "Put ice in glass. Pour in shots. Fill with Sour Mix.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tqxyxx1472719737.jpg"),
  ("Absolut Evergreen", 4, "Mix, pour over ice and top up with Bitter Lemon.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wrxrxp1472812609.jpg"),
  ("Absolut limousine", 4, "Fill Absolut into a glass. Add Lime juice. Add Ice and lime wedges.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ssqpyw1472719844.jpg"),
  ("Amaretto Stone Sour", 4, "Shake and Serve over ice", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xwryyx1472719921.jpg"),
  ("Amaretto Stone Sour Alternative", 4, "Shake sour mix, tequila and amaretto with ice. Strain into highball glass. Add a splash of OJ. Garnish with orange slice and a cherry.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wutxqr1472720012.jpg"),
  ("Apello", 4, "Stirr. Grnish with maraschino cherry.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uptxtv1468876415.jpg"),
  ("Apple Berry Smoothie", 4, "Throw everything into a blender and liquify.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xwqvur1468876473.jpg"),
  ("Apple Pie with A Crust", 4, "Just mix the two liquids and sprinkle in the cinnamon. Serve either cold or heated.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qspqxt1472720078.jpg"),
  ("Banana Cantaloupe Smoothie", 4, "Juice cantaloupe, pour juice into blender, add banana, and liquify.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uqxqsy1468876703.jpg"),
  ("Bible Belt", 4, "Mix all ingredients, and pour over ice.", "Alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/6bec6v1503563675.jpg"),
  ("Egg Cream", 4, "Mix syrup and milk in a fountain glass. Add soda water, serve with a straw.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/mvis731484430445.jpg"),
  ("Fruit Cooler", 4, "Toss strawberries with sugar, and let sit overnight in refrigerator. Cut lemon, reserve two slices. Juice the rest. Mix together the lemon juice, strawberries, apple juice, and soda water. Add slices of lemon (decor, really). In glasses, put ice cubes, and a slice of apple. Pour drink in, and serve.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/i3tfn31484430499.jpg"),
  ("Castillian Hot Chocolate", 5, "Shift the cocoa and sugar together into a medium-sized saucepan. Dissolve the cornstarch in the water, and stir into the cocoa and sugar until it is a smooth paste. Begin heating the mixture, stirring it with a whisk, and gradually pour in the milk. Continue stirring with the whisk as you bring the liquid to a simmer. Allow the chocolate to simmer for about 10 minutes, stirring often, until it is thick, glossy and completely smooth. Serve steaming hot in coffee mug. Serves six.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/3nbu4a1487603196.jpg"),
  ("Chocolate Beverage", 5, "Boil milk in the top of a deep double boiler five minutes. Remove from fire and add chocolate, mixed with the cinnamon, a little at a time, beating with molinillo or egg beater after each addition. When the chocolate is thoroughly blended, heat to the boiling point. Place over bottom of double boiler and add eggs, whipping constantly, until they are thoroughly blended and the mixture is frothing. Serve in coffee mug. Serves eight.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/jbqrhv1487603186.jpg"),
  ("Chocolate Drink", 5, "Melt the bar in a small amount of boiling water. Add milk. Cook over low heat, whipping gently (with a whisk, i would assume) until heated well. Don't let it boil! Serve in coffee mug.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/q7w4xu1487603180.jpg"),
  ("Drinking Chocolate", 5, "Heat the cream and milk with the cinnamon and vanilla bean very slowly for 15-20 minutes. (If you don't have any beans add 1-2 tsp of vanilla after heating). Remove the bean and cinnamon. Add the chocolate. Mix until fully melted. Serve topped with some very dense fresh whipped cream. Serves 1-2 depending upon how much of a glutton you are. For a richer chocolate, use 4 oz of milk, 4 oz of cream, 4 oz of chocolate. Serve in coffee mug.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/u6jrdf1487603173.jpg"),
  ("Hot Chocolate to Die for", 5, "Melt the chocolate, butter and vanilla in a double boiler. When just smooth stir in the cream.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/0lrmjp1487603166.jpg"),
  ("Microwave Hot Cocoa", 5, "Combine sugar, cocoa, salt and hot water in 1-quart micro-proof measuring cup (or coffee mug). Microwave at HIGH (100%) for 1 to 1 1\/2 minutes or until boiling. Add milk, sitr and microwave an additonal 1 1\/2 to 2 minutes or until hot. Stir in vanilla, blend well.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/8y4x5f1487603151.jpg"),
  ("Nuked Hot Chocolate", 5, "Mix with a bit of milk (1 oz or so) in coffee mug. Nuke mug for about 30-50 seconds. Stir until the heated cocoa dissolves. Fill mug with milk. Nuke for 1-2 minutes, depending on wattage and preferences as to burnt mouth parts.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xcu6nb1487603142.jpg"),
  ("Orange Scented Hot Chocolate", 5, "Combine all ingredients in heavy medium saucepan. Stir over low heat until chocolate melts. Increase heat and bring just to a boil, stirring often. Remove from heat and whisk untily frothy. Return to heat and bring to boil again. Remove from heat, whisk until frothy. Repeat heating and whisking once again. Discard orange peel. (Can be prepared 2 hours ahead. Let stand at room temperature. Before serving, bring just to boil, remove from heat and whisk until frothy.) Pour hot chocolate into coffee mugs. Makes 2 servings.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/hdzwrh1487603131.jpg"),
  ("Spanish chocolate", 5, "Stir the milk with the chocolate and the cinnamon over low heat until the chocolate dissolves. Add the eggs and beat the mixture until it becomes thick, taking care not to boil. Serve in coffee mug.", "Non alcoholic", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/pra8vt1487603054.jpg");
  
DROP TABLE IF EXISTS `recipes_ingredients`;
CREATE TABLE `recipes_ingredients` (
  `recipe_id` INT NOT NULL,
  `ingredient_id` INT NOT NULL,
  `measurement` VARCHAR(255),
  PRIMARY KEY (`recipe_id`, `ingredient_id`),
  FOREIGN KEY (`recipe_id`) REFERENCES `drinks_recipes` (`id`),
  FOREIGN KEY (`ingredient_id`) REFERENCES `drinks_ingredients` (`id`)
);

INSERT INTO `recipes_ingredients` (`recipe_id`, `ingredient_id`, `measurement`) VALUES
(1, 65, "2 1\/2 shots "),
(1, 55, NULL),
(1, 70, NULL),
(2, 3, "1 3\/4 shot "),
(2, 101, "1 Shot "),
(2, 48, "1\/4 Shot"),
(2, 36, "1\/8 Shot"),
(3, 40, "1\/2 shot Bacardi "),
(3, 102, "1\/2 shot "),
(4, 26, '1/3 part'),
(4, 90, '1/3 part'),
(4, 103, '1/3 part'),
(5, 100, '1 part'),
(5, 18, "5 parts"),
(6, 16, '1/3'),
(6, 90, '1/3'),
(6, 44, '1/3'),
(7, 3, '2 shots'),
(7, 36, '1/2 shot'),
(7, 64, '1/2 shot'),
(7, 50, '1/2 shot'),
(7, 105, '1/2 Fresh'),
(8, 39, '1/3 part'),
(8, 108, '1 shot'),
(8, 107, '1/3 part'),
(8, 106, '1/3 part'),
(9, 15, '1/2 oz'),
(9, 3, '1 oz'),
(9, 8, '1/2 oz'),
(9, 48, '1/2 tsp'),
(9, 36, '1 tsp'),
(9, 25, NULL),
(10, 90, '1/3'),
(10, 101, '1/3'),
(10, 26, '1/4'),
(11, 4, '2 oz'),
(11, 48, '1 oz'),
(11, 36, '1 tsp'),
(12, 40, '1 oz Bacardi'),
(12, 102, '1 oz'),
(13, 3, '1/2 oz'),
(13, 1, '1/2 oz'),
(13, 21, '1/2 oz'),
(13, 9, '1/2 oz'),
(13, 22, '1/2 oz'),
(13, 108, '1/2 oz'),
(13, 109, '1-2 dash'),
(13, 24, '1 wedge'),
(13, 83, 'Ganish with'),
(14, 66, '2-3 oz'),
(14, 108, NULL),
(15, 110, '21/2 oz'),
(15, 101, '1 splash'),
(15, 105, 'Fill with'),
(16, 111, NULL),
(16, 112, NULL),
(16, 22, NULL),
(16, 113, NULL),
(16, 97, NULL),
(17, 3, '2 oz dry'),
(17, 97, '4 oz'),
(17, 48, '0.75 oz'),
(18, 114, '1 oz'),
(18, 16, '1/2 oz'),
(18, 105, '4 oz'),
(18, 36, '1/2 oz'),
(19, 1, '2 oz'),
(19, 115, '4 oz'),
(19, 116, '1 twist of'),
(20, 22, '2 oz'),
(20, 117, '1 oz'),
(20, 118, '1 tsp'),
(20, 51, '5'),
(20, 119, NULL),
(21, 1, '1 oz'),
(21, 23, '1 oz'),
(21, 105, '1 oz'),
(21, 48, '1/2 oz'),
(21, 55, '3 oz'),
(21, 116, '1 twist of'),
(22, 4, '1 shot'),
(22, 1, '2 shots'),
(22, 22, '1 shot'),
(22, 105, '1 shot'),
(23, 35, '1 oz white'),
(23, 22, '1 oz'),
(24, 22, '1 oz'),
(24, 120, '1 oz'),
(24, 78, '1 oz'),
(24, 96, 'Top'),
(25, 88, '2 oz'),
(25, 121, '1/2 oz'),
(25, 118, '1 splash'),
(25, 105, '1 oz'),
(26, 22, '1 oz'),
(26, 107, '1 oz'),
(26, 105, '3 oz'),
(26, 78, '3 oz'),
(27, 16, '1 jigger'),
(27, 83, 'Juice of 1/2'),
(27, 122, NULL),
(27, 123, NULL),
(28, 124, '1/2 oz'),
(28, 10, '3/4 oz'),
(28, 22, '1/2 oz'),
(28, 125, 'Fill with'),
(29, 22, '1 shot'),
(29, 78, '2 shots'),
(29, 18, 'Top up with'),
(30, 3, '2 shots'),
(30, 5, '1 shot'),
(30, 105, '1 shot'),
(30, 126, '1 dashes'),
(31, 88, '11/2 oz'),
(31, 109, '3/4 oz'),
(31, 96, '1/2 oz'),
(31, 127, '3 oz'),
(31, 83, '1 slice'),
(32, 128, '1/2 oz'),
(32, 1, '1/2 oz'),
(32, 40, '1/2 oz Bacardi'),
(32, 35, '1 oz'),
(32, 129, '1 oz'),
(32, 50, '3 oz'),
(32, 130, '1 oz'),
(32, 131, '1 cup'),
(33, 132, '1 shot'),
(33, 26, '1 shot'),
(33, 133, 'Fill with'),
(34, 26, '2 oz'),
(34, 50, '8 oz'),
(34, 131, '2 scoops'),
(35, 50, '1o cl cold'),
(35, 105, '4 cl'),
(35, 49, '2 tsp'),
(35, 134, '1/2'),
(36, 51, '1/2 lb frozen'),
(36, 134, '1 frozen'),
(36, 53, '1 cup plain'),
(36, 50, '1 cup'),
(36, 135, 'to taste'),
(37, 51, '1/2 lb frozen'),
(37, 134, '1 frozen'),
(37, 46, '2 cups fresh'),
(38, 122, 'cubes'),
(38, 52, NULL),
(38, 34, NULL),
(38, 22, NULL),
(38, 50, NULL),
(39, 90, '3/4 oz'),
(39, 136, '3/4 oz'),
(39, 26, '3/4 oz'),
(39, 137, '1/2 oz'),
(39, 50, 'to fill'),
(40, 131, '3 cups'),
(40, 50, '1 cup'),
(40, 136, '1/2 cup'),
(40, 138, 'for topping'),
(40, 139, '4 tablespoons'),
(40, 140, '4 tablespoons'),
(40, 141, '15'),
(41, 131, '2 scoops'),
(41, 137, '1 part'),
(41, 50, 'full glass'),
(41, 22, '2 parts'),
(42, 142, '1 shot'),
(42, 35, '2 shots'),
(42, 143, '2 scoops'),
(42, 52, '1 oz'),
(42, 144, '4 oz'),
(42, 138, '1'),
(42, 145, '1'),
(42, 134, '1 piece'),
(43, 19, '1 shot'),
(43, 1, '1 shot Jamaican'),
(43, 122, 'cubes'),
(43, 50, NULL),
(44, 16, '1 shot'),
(44, 10, '1 shot'),
(44, 122, 'cubes'),
(44, 113, NULL),
(45, 88, '2/3 part'),
(45, 146, '1/3 part'),
(45, 122, 'cubes'),
(45, 147, NULL),
(46, 88, '2/3'),
(46, 30, '1/3'),
(46, 122, 'Fill with'),
(46, 148, 'Top it up with'),
(47, 16, '1 part'),
(47, 113, '1 part'),
(47, 105, '1 part'),
(48, 113, '2 oz'),
(48, 16, '2 oz'),
(48, 22, '2 oz'),
(48, 105, 'Add splash'),
(49, 105, '4 cl'),
(49, 41, '3 cl'),
(49, 46, '1 cl'),
(49, 123, '1'),
(50, 58, '1 cup'),
(50, 149, '2'),
(51, 46, '3 parts'),
(51, 128, '1 part'),
(51, 150, '3 dashes'),
(52, 57, 'Juice of 1/2'),
(52, 134, '1'),
(53, 10, '2 oz'),
(53, 9, '1/2 oz'),
(53, 56, '2 wedges'),
(53, 113, '2 oz'),
(54, 52, '2 tblsp'),
(54, 50, '6 oz whole'),
(54, 127, '6 oz'),
(55, 46, '1 can frozen'),
(55, 51, '1 cup'),
(55, 25, '2 tblsp'),
(55, 83, '1'),
(55, 149, '1'),
(55, 127, '1 L'),
(55, 122, NULL),
(56, 62, '1/2 cup'),
(56, 25, '1 cup'),
(56, 151, '7 tsp'),
(56, 70, '1/2 cup'),
(56, 50, '1 qt'),
(57, 50, '6 cups'),
(57, 63, '3 oz Mexican'),
(57, 150, '1 tsp powdered'),
(57, 80, '3'),
(58, 63, '125 gr'),
(58, 50, '3/4 L'),
(58, 70, NULL),
(59, 64, '2 oz'),
(59, 50, '6-8 oz'),
(59, 150, '1 stick'),
(59, 152, '1'),
(59, 63, '2 oz finely chopped dark'),
(59, 138, 'Fresh'),
(60, 63, '12 oz fine'),
(60, 153, '1 tsp'),
(60, 154, '1/2 tsp'),
(60, 155, '1 cup'),
(60, 156, 'mini'),
(61, 25, '5 tblsp'),
(61, 62, '3 tblsp'),
(61, 157, '1 dash'),
(61, 70, '3 tblsp hot'),
(61, 50, '2 cups'),
(61, 154, '1/4 tsp'),
(62, 62, '2 tsp'),
(62, 25, '1 tsp'),
(62, 154, '1/2 tsp'),
(62, 50, '12 oz'),
(63, 50, '2 cups'),
(63, 63, '4 oz chopped bittersweet or semi-sweet'),
(63, 158, '3 2-inch strips'),
(63, 71, '1/2 tsp instant'),
(63, 159, '1/8 tsp ground'),
(64, 50, '2 cups'),
(64, 63, '2 oz sweet'),
(64, 150, '1/2 tsp'),
(64, 79, '2 beaten');