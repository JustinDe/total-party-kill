<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui" />
	<link rel="stylesheet" type="text/css" href="css/normalize.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="css/style.css" media="screen" />
	<link href='http://fonts.googleapis.com/css?family=Noticia+Text:400,700' rel='stylesheet' type='text/css'>
	<title></title>
</head>
<body>
	<div id="GameBoard">

		<div id="CharacterPanel">
			<div id="row1">
				<div id="MemberSlot1" class="PartyMember">
					<ul class="AttackMenu">
						<li class="Attack">Fireball <span class="AttackDamageAmount">2</span></li>
						<li class="Attack">Blizzard <span class="AttackDamageAmount">1</span></li>
						<li class="Attack">Sheild Bash</li>
						<li class="Attack Used">Poop</li>
						<li class="Attack">Run Away</li>
					</ul>
				</div>
				<div id="MemberSlot2" class="PartyMember"></div>
				<div id="MemberSlot3" class="PartyMember"></div>
			</div>
			<div id="row2">
				<div id="MemberSlot4" class="PartyMember"></div>
				<div id="MemberSlot5" class="PartyMember"></div>
			</div>
		</div>

		<div id="EnemyPanel">
			<div id="row3">
				<div id="EnemySlot1" class="Enemy"></div>
				<div id="EnemySlot2" class="Enemy"></div>
				<div id="EnemySlot3" class="Enemy"></div>
			</div>
		</div>

	</div>
</body>
</html>