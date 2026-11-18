const projects = [
	{
		id: 'box-golf',
		title: 'Cardboard mini golf',
		category: 'cardboard',
		material: 'Paper & boxes',
		time: '20 min',
		age: 'Ages 7+',
		icon: '⛳',
		stepIcons: ['📦', '📐', '🛤️', '🏌️'],
		tone: 'mint',
		summary: 'Turn flat cardboard scraps into a tiny putting course and tabletop tournament.',
		finish: 'A tiny tabletop golf course with cardboard walls, a paper ramp, and a clear path to the goal.',
		needs: { cardboardSquares: 3, scrapPaperSheets: 1, tapeMeters: 0.5, pingPongBalls: 1 },
		materials: ['3 cardboard squares or pieces', 'Scrap paper', 'Tape', 'Ping-pong ball'],
		steps: [
			'Ask an adult to cut one cardboard square for the course base and two strips for the walls.',
			'Fold the cardboard strips into little walls and tape them around the base.',
			'Add ramps, tunnels, and paper obstacles. Leave a clear path to the goal.',
			'Roll a paper scrap into a tiny club, then try to guide the ball into the finish.'
		]
	},
	{
		id: 'bottle-bowling',
		title: 'Bottle-cap bowling',
		category: 'containers',
		material: 'Bottles & tubs',
		time: '15 min',
		age: 'Ages 5+',
		icon: '🎳',
		stepIcons: ['🧼', '🎨', '📍', '⚽'],
		tone: 'peach',
		summary: 'Turn clean bottles into a colorful bowling set for the hallway or backyard.',
		finish: 'Six bright bottle pins lined up for a soft-ball bowling game.',
		needs: { plasticBottles: 6, scrapPaperSheets: 1, tapeMeters: 0.3, softBalls: 1 },
		materials: ['6 clean, empty plastic bottles', 'Scrap paper', 'Tape', 'A soft ball'],
		steps: [
			'Rinse the bottles and let them dry. Make sure each lid is firmly attached.',
			'Decorate the bottles with paper stripes or drawings and line them up like pins.',
			'Mark a throwing line a few steps away using a strip of paper.',
			'Roll a soft ball toward the pins. Keep score and change the pin pattern each round.'
		]
	},
	{
		id: 'sock-puppet',
		title: 'Sock puppet pal',
		category: 'fabric',
		material: 'Fabric & bits',
		time: '20 min',
		age: 'Ages 6+',
		icon: '🧦',
		stepIcons: ['🧦', '👀', '🧶', '🎭'],
		tone: 'blue',
		summary: 'Give a lonely sock a new job as the star of your very own puppet show.',
		finish: 'A friendly sock character with a paper face and yarn hair, ready for a puppet show.',
		needs: { oldSocks: 1, fabricSquares: 1, scrapPaperSheets: 1, stringMeters: 0.2 },
		materials: ['Clean old sock', 'Paper scraps', 'Yarn or fabric scraps', 'Glue', 'Markers'],
		steps: [
			'Slide your hand into the sock and pinch a fold for the puppet’s mouth.',
			'Draw eyes and a nose on paper scraps. Ask an adult to help cut them out.',
			'Glue on the face pieces, yarn hair, and any fabric decorations.',
			'Let the glue dry, then give your puppet a name and make up a short story.'
		]
	},
	{
		id: 'carton-bug',
		title: 'Egg-carton bug band',
		category: 'cardboard',
		material: 'Paper & boxes',
		time: '25 min',
		age: 'Ages 6+',
		icon: '🐛',
		stepIcons: ['✂️', '🎨', '🪽', '🐛'],
		tone: 'yellow',
		summary: 'Make a wiggly creature from a carton cup and scraps, then build it a whole band.',
		finish: 'A colorful carton-cup bug with paper wings, spots, and a whole bug-band to join.',
		needs: { eggCartons: 1, scrapPaperSheets: 1, stringMeters: 0.3 },
		materials: ['Clean egg carton', 'Paper scraps', 'Markers', 'Glue', 'String'],
		steps: [
			'Ask an adult to cut one or more cups from the carton.',
			'Color the carton cup and add paper wings, spots, or a silly face.',
			'Draw and cut paper legs or antennae with adult help, then glue them on.',
			'Make more bugs and line them up for a tiny parade or puppet show.'
		]
	},
	{
		id: 'tube-telescope',
		title: 'Backyard explorer scope',
		category: 'cardboard',
		material: 'Paper & boxes',
		time: '10 min',
		age: 'Ages 5+',
		icon: '🔭',
		stepIcons: ['🧻', '📄', '✏️', '🌳'],
		tone: 'lilac',
		summary: 'Turn a paper tube into an explorer’s pretend telescope for spotting nature nearby.',
		finish: 'A decorated explorer scope made from a paper tube, ready for pretend nature spotting.',
		needs: { paperTubes: 1, scrapPaperSheets: 1, tapeMeters: 0.2 },
		materials: ['Paper towel tube', 'Scrap paper', 'Tape', 'Markers'],
		steps: [
			'Check that the tube is clean and dry. Flatten any rough edges.',
			'Wrap the tube with scrap paper and tape the paper in place.',
			'Draw a pretend focus dial, stars, or explorer badges on the paper.',
			'Take it outside and look for leaves, clouds, and birds. Never point it at the sun.'
		]
	},
	{
		id: 'carton-planter',
		title: 'Window-sill seed starter',
		category: 'containers',
		material: 'Bottles & tubs',
		time: '15 min',
		age: 'Ages 7+',
		icon: '🌱',
		stepIcons: ['🪴', '🪨', '🌱', '☀️'],
		tone: 'mint',
		summary: 'Give a clean food tub a second life as a little home for herbs or flower seeds.',
		finish: 'A small tub planter on a tray, with soil and seeds growing in a sunny spot.',
		needs: { foodTubs: 1 },
		materials: ['Clean yogurt tub', 'Potting soil', 'Seeds', 'Spoon', 'Tray'],
		steps: [
			'Ask an adult to check the tub is clean and make a few drainage holes in its base.',
			'Set the tub on a tray and fill it most of the way with potting soil.',
			'Plant seeds following the packet directions, then cover them gently with soil.',
			'Add a little water and place the tub somewhere bright. Check it each day.'
		]
	},
	{
		id: 'desk-caddy',
		title: 'Cereal-box desk caddy',
		category: 'cardboard',
		material: 'Paper & boxes',
		time: '25 min',
		age: 'Ages 8+',
		icon: '✏️',
		stepIcons: ['📦', '📄', '🧴', '✏️'],
		tone: 'pink',
		summary: 'Rescue a cereal box and cardboard tubes from the recycling for a tidy desk.',
		finish: 'A colorful upright desk caddy with separate cardboard-tube holders for pencils and pens.',
		needs: { cardboardBoxes: 1, paperTubes: 3, scrapPaperSheets: 2, tapeMeters: 0.5 },
		materials: ['Cereal box', 'Clean cardboard tubes', 'Scrap paper', 'Tape', 'Glue'],
		steps: [
			'Ask an adult to trim the cereal box to the height you want for your caddy.',
			'Cover the outside with colorful scrap paper and secure it with tape or glue.',
			'Arrange cardboard tubes inside the box to make sections for pencils and markers.',
			'Glue the tubes in place, let everything dry, then fill your organizer.'
		]
	},
	{
		id: 'tin-drum',
		title: 'Rubber-band rhythm drum',
		category: 'containers',
		material: 'Bottles & tubs',
		time: '10 min',
		age: 'Ages 6+',
		icon: '🥁',
		stepIcons: ['🫙', '〰️', '🎨', '🥁'],
		tone: 'peach',
		summary: 'Stretch wide rubber bands over a clean tub and tap out a beat with your fingers.',
		finish: 'A decorated tub drum with rubber-band strings stretched across its top.',
		needs: { foodTubs: 1, rubberBands: 5, scrapPaperSheets: 1 },
		materials: ['Clean, empty food tub', 'Wide rubber bands', 'Paper', 'Markers'],
		steps: [
			'Choose a clean tub with a smooth, unbroken rim.',
			'Stretch rubber bands around the tub so they cross over the open top.',
			'Decorate the outside with paper and drawings, keeping the bands clear.',
			'Tap each band gently with your fingers and invent a rhythm with a friend.'
		]
	},
	{
		id: 'fork-octopus',
		title: 'Plastic-fork octopus puppet',
		category: 'fabric',
		material: 'Fabric & bits',
		time: '20 min',
		age: 'Ages 6+',
		icon: '🐙',
		stepIcons: ['🍴', '🖍️', '🧶', '🐙'],
		tone: 'lilac',
		summary: 'Turn a clean plastic fork into a silly sea-creature puppet with paper and yarn.',
		finish: 'A smiling octopus face above a fork handle, with yarn tentacles ready to wiggle.',
		needs: { plasticForks: 1, scrapPaperSheets: 1, stringMeters: 0.3, tapeMeters: 0.2 },
		materials: ['1 clean plastic fork', 'Scrap paper', 'Yarn or string', 'Tape', 'Markers'],
		steps: [
			'Choose a clean plastic fork with no cracks. The handle will be your puppet stick.',
			'Draw a big octopus face on scrap paper and ask an adult to help cut it out.',
			'Tape the face near the top of the fork handle. Tie short yarn pieces around the fork prongs for wiggly tentacles.',
			'Draw a name tag, then gently wiggle your octopus puppet through an underwater story.'
		]
	},
	{
		id: 'bottle-cap-spinner',
		title: 'Bottle-cap spinning tops',
		category: 'containers',
		material: 'Bottles & tubs',
		time: '15 min',
		age: 'Ages 7+',
		icon: '🌀',
		stepIcons: ['🧢', '🎨', '🪵', '🌀'],
		tone: 'blue',
		summary: 'Make bright tabletop spinners from clean bottle caps and blunt craft sticks.',
		finish: 'Two colorful bottle-cap tops with blunt stick handles, ready to spin on a tabletop.',
		needs: { bottleCaps: 2, craftSticks: 2, scrapPaperSheets: 1 },
		materials: ['2 clean, large bottle caps', '2 blunt craft sticks', 'Scrap paper', 'Tape or glue'],
		steps: [
			'Wash and dry two large bottle caps. Pick caps with smooth, unbroken edges.',
			'Decorate the flat sides with paper shapes or colorful marker patterns.',
			'Ask an adult to help attach a blunt craft stick firmly to the center of each cap.',
			'Let the glue dry completely, then spin the tops on a clear table and see which pattern blurs fastest.'
		]
	},
	{
		id: 'cardboard-creature',
		title: 'Cardboard-box creature',
		category: 'cardboard',
		material: 'Paper & boxes',
		time: '25 min',
		age: 'Ages 6+',
		icon: '🤖',
		stepIcons: ['📦', '👀', '🎨', '🤖'],
		tone: 'yellow',
		summary: 'Give a small box a face, personality, and a new life as a friendly toy.',
		finish: 'A friendly little box creature with paper ears, a bright face, and bottle-cap feet.',
		needs: { cardboardBoxes: 1, scrapPaperSheets: 2, tapeMeters: 0.3 },
		materials: ['Small clean cardboard box', 'Scrap paper', 'Tape or glue', 'Markers', 'Clean bottle caps (optional)'],
		steps: [
			'Choose a small, clean box and close its flaps with tape.',
			'Draw a face on scrap paper and add paper shapes for ears, spots, or a silly hat.',
			'Ask an adult to help attach the decorations. Add clean bottle caps as feet or buttons if you like.',
			'Name your new creature and invent a home and a pretend adventure for it.'
		]
	}
];

const projectGrid = document.getElementById('project-grid');
const searchInput = document.getElementById('search-input');
const resultCount = document.getElementById('result-count');
const emptyState = document.getElementById('empty-state');
const projectDialog = document.getElementById('project-dialog');
const inventoryList = document.getElementById('inventory-list');
const recommendationList = document.getElementById('recommendation-list');
const recommendationTitle = document.getElementById('recommendation-title');
let activeFilter = 'all';
let activeProject = null;
let activeStepIndex = 0;

const inventoryMaterials = [
	{ id: 'cardboardBoxes', label: 'Small boxes', icon: '📦', unit: 'boxes', step: '1', singular: 'small cardboard box', plural: 'small cardboard boxes' },
	{ id: 'cardboardSquares', label: 'Cardboard', icon: '🟫', unit: 'pieces', step: '1', singular: 'cardboard square', plural: 'cardboard squares' },
	{ id: 'plasticBottles', label: 'Plastic bottles', icon: '🧴', unit: 'bottles', step: '1', singular: 'plastic bottle', plural: 'plastic bottles' },
	{ id: 'paperTubes', label: 'Paper tubes', icon: '🧻', unit: 'tubes', step: '1', singular: 'paper tube', plural: 'paper tubes' },
	{ id: 'eggCartons', label: 'Egg cartons', icon: '🥚', unit: 'cartons', step: '1', singular: 'egg carton', plural: 'egg cartons' },
	{ id: 'foodTubs', label: 'Clean food tubs', icon: '🥣', unit: 'tubs', step: '1', singular: 'clean food tub', plural: 'clean food tubs' },
	{ id: 'oldSocks', label: 'Clean old socks', icon: '🧦', unit: 'socks', step: '1', singular: 'clean old sock', plural: 'clean old socks' },
	{ id: 'fabricSquares', label: 'Fabric scraps', icon: '🧶', unit: 'pieces', step: '1', singular: 'fabric square', plural: 'fabric squares' },
	{ id: 'scrapPaperSheets', label: 'Scrap paper', icon: '🗒️', unit: 'sheets', step: '1', singular: 'sheet of scrap paper', plural: 'sheets of scrap paper' },
	{ id: 'stringMeters', label: 'String or yarn', icon: '🧵', unit: 'metres', step: '0.1', singular: 'm of string or yarn', plural: 'm of string or yarn' },
	{ id: 'tapeMeters', label: 'Tape', icon: '🩹', unit: 'metres', step: '0.1', singular: 'm of tape', plural: 'm of tape' },
	{ id: 'pingPongBalls', label: 'Ping-pong balls', icon: '🏓', unit: 'balls', step: '1', singular: 'ping-pong ball', plural: 'ping-pong balls' },
	{ id: 'softBalls', label: 'Soft balls', icon: '⚽', unit: 'balls', step: '1', singular: 'soft ball', plural: 'soft balls' },
	{ id: 'rubberBands', label: 'Rubber bands', icon: '➰', unit: 'bands', step: '1', singular: 'rubber band', plural: 'rubber bands' },
	{ id: 'plasticForks', label: 'Plastic forks', icon: '🍴', unit: 'forks', step: '1', singular: 'plastic fork', plural: 'plastic forks' },
	{ id: 'bottleCaps', label: 'Bottle caps', icon: '🧢', unit: 'caps', step: '1', singular: 'bottle cap', plural: 'bottle caps' },
	{ id: 'craftSticks', label: 'Craft sticks', icon: '🪵', unit: 'sticks', step: '1', singular: 'craft stick', plural: 'craft sticks' }
];

const savedInventory = JSON.parse(localStorage.getItem('loopLabInventory') || '{}');

function makeElement(tag, className, text) {
	const element = document.createElement(tag);
	if (className) element.className = className;
	if (text) element.textContent = text;
	return element;
}

function renderInventory() {
	inventoryList.replaceChildren(...inventoryMaterials.map(material => {
		const field = makeElement('div', 'inventory-item');
		const label = makeElement('label', 'inventory-label');
		label.htmlFor = `inventory-${material.id}`;
		label.append(
			makeElement('span', 'material-sticker', material.icon),
			makeElement('span', 'material-name', material.label),
			makeElement('span', 'material-unit', material.unit)
		);

		const input = document.createElement('input');
		input.id = `inventory-${material.id}`;
		input.type = 'number';
		input.min = '0';
		input.step = material.step;
		input.value = String(Math.max(0, Number(savedInventory[material.id]) || 0));
		input.setAttribute('aria-label', `${material.label}, ${material.unit} available`);
		const controls = makeElement('div', 'quantity-control');
		const minus = makeElement('button', 'quantity-button', '−');
		minus.type = 'button';
		const changeAmount = Number(material.step) === 1
			? `one ${material.singular}`
			: `${material.step} ${material.unit} of ${material.label.toLowerCase()}`;
		minus.setAttribute('aria-label', `Remove ${changeAmount}`);
		const plus = makeElement('button', 'quantity-button', '+');
		plus.type = 'button';
		plus.setAttribute('aria-label', `Add ${changeAmount}`);

		function saveQuantity() {
			savedInventory[material.id] = Math.max(0, Number(input.value) || 0);
			localStorage.setItem('loopLabInventory', JSON.stringify(savedInventory));
			field.classList.toggle('has-material', savedInventory[material.id] > 0);
			renderRecommendations();
		}
		input.addEventListener('input', saveQuantity);
		minus.addEventListener('click', () => {
			input.value = String(Math.max(0, Number(input.value) - Number(material.step)).toFixed(material.step === '1' ? 0 : 1));
			saveQuantity();
		});
		plus.addEventListener('click', () => {
			input.value = String((Number(input.value) + Number(material.step)).toFixed(material.step === '1' ? 0 : 1));
			saveQuantity();
		});

		field.classList.toggle('has-material', Number(input.value) > 0);
		controls.append(minus, input, plus);
		field.append(label, controls);
		return field;
	}));
}

function getInventoryCounts() {
	return Object.fromEntries(inventoryMaterials.map(material => [
		material.id,
		Math.max(0, Number(document.getElementById(`inventory-${material.id}`).value) || 0)
	]));
}

function formatMissing(missing) {
	return missing.map(item => {
		const quantity = Number(item.amount.toFixed(1));
		const label = quantity === 1 ? item.material.singular : item.material.plural;
		return `${quantity} ${label}`;
	}).join(', ');
}

function renderRecommendations() {
	const counts = getInventoryCounts();
	const hasInventory = Object.values(counts).some(count => count > 0);
	if (!hasInventory) {
		recommendationTitle.textContent = 'Start with your materials';
		recommendationList.replaceChildren(makeElement('p', 'recommendation-empty', 'Add a quantity to see what you can make.'));
		return;
	}

	const scoredProjects = projects.map(project => {
		const missing = Object.entries(project.needs).flatMap(([id, amount]) => {
			const gap = Math.max(0, amount - counts[id]);
			if (gap === 0) return [];
			return [{ material: inventoryMaterials.find(item => item.id === id), amount: gap }];
		});
		const matchedMaterials = Object.keys(project.needs).filter(id => counts[id] > 0).length;
		return { project, missing, matchedMaterials };
	}).filter(result => result.matchedMaterials > 0);

	const ready = scoredProjects.filter(result => result.missing.length === 0);
	const matches = ready.length ? ready : scoredProjects
		.sort((first, second) => first.missing.length - second.missing.length || second.matchedMaterials - first.matchedMaterials)
		.slice(0, 4);

	if (ready.length) {
		recommendationTitle.textContent = `${ready.length} project${ready.length === 1 ? '' : 's'} ready to make`;
	} else if (matches.length) {
		recommendationTitle.textContent = 'Almost ready — see what is missing';
	} else {
		recommendationTitle.textContent = 'No project matches yet';
		recommendationList.replaceChildren(makeElement('p', 'recommendation-empty', 'Try adding cardboard, paper, bottles, fabric, or string.'));
		return;
	}

	recommendationList.replaceChildren(...matches.map(({ project, missing }) => {
		const card = makeElement('article', `recommendation-card${missing.length ? ' almost' : ''}`);
		const icon = makeElement('span', 'recommendation-icon', project.icon);
		icon.setAttribute('aria-hidden', 'true');
		const title = makeElement('h4', '', project.title);
		const status = makeElement('span', 'recommendation-status', missing.length ? 'Almost there' : 'Ready to make');
		const openButton = makeElement('button', 'recommendation-open', 'See steps ↗');
		openButton.type = 'button';
		openButton.setAttribute('aria-label', `Open instructions for ${project.title}`);
		openButton.addEventListener('click', () => openProject(project));
		card.append(icon, title, status, openButton);
		if (missing.length) card.append(makeElement('p', 'recommendation-missing', `Still need: ${formatMissing(missing)}`));
		return card;
	}));
}

function renderProjects() {
	const query = searchInput.value.trim().toLowerCase();
	const visibleProjects = projects.filter(project => {
		const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
		const searchableText = [project.title, project.summary, project.material, ...project.materials].join(' ').toLowerCase();
		return matchesFilter && searchableText.includes(query);
	});

	projectGrid.replaceChildren();
	visibleProjects.forEach((project, index) => {
		const card = makeElement('article', 'project-card');
		card.style.animationDelay = `${Math.min(index, 5) * 45}ms`;

		const visual = makeElement('button', `project-visual tone-${project.tone}`);
		visual.type = 'button';
		visual.setAttribute('aria-label', `Open ${project.title} project guide`);
		visual.addEventListener('click', () => openProject(project));
		visual.append(makeElement('span', 'project-emoji', project.icon));
		visual.append(makeElement('span', 'visual-number', `NO. ${String(index + 1).padStart(2, '0')}`));

		const content = makeElement('div', 'card-content');
		const meta = makeElement('div', 'card-meta');
		meta.append(makeElement('span', 'tag', project.material));
		meta.append(makeElement('span', 'duration', project.time));
		content.append(meta, makeElement('h3', '', project.title), makeElement('p', '', project.summary));

		const bottom = makeElement('div', 'card-bottom');
		bottom.append(makeElement('span', 'age-label', project.age));
		const openButton = makeElement('button', 'open-project', 'Make this ↗');
		openButton.type = 'button';
		openButton.setAttribute('aria-label', `Open instructions for ${project.title}`);
		openButton.addEventListener('click', () => openProject(project));
		bottom.append(openButton);
		content.append(bottom);
		card.append(visual, content);
		projectGrid.append(card);
	});

	resultCount.textContent = String(visibleProjects.length);
	emptyState.hidden = visibleProjects.length !== 0;
}

function openProject(project) {
	activeProject = project;
	activeStepIndex = 0;
	document.getElementById('dialog-title').textContent = project.title;
	document.getElementById('dialog-summary').textContent = project.summary;
	document.getElementById('dialog-finish').textContent = project.finish;
	document.getElementById('dialog-material').textContent = project.material;
	document.getElementById('dialog-time').textContent = `${project.time} · ${project.age}`;

	const dialogArt = document.getElementById('dialog-art');
	dialogArt.className = `dialog-art tone-${project.tone}`;
	dialogArt.replaceChildren(
		makeElement('span', 'final-art-sticker sticker-one', project.stepIcons[0]),
		makeElement('span', 'final-art-sticker sticker-two', project.stepIcons[2]),
		makeElement('span', 'project-emoji', project.icon)
	);

	const materialsList = document.getElementById('dialog-materials');
	materialsList.replaceChildren(...project.materials.map(material => makeElement('li', '', material)));

	renderGuideStep();

	projectDialog.showModal();
}

function renderGuideStep() {
	if (!activeProject) return;

	const stepNumber = activeStepIndex + 1;
	const lastStep = activeStepIndex === activeProject.steps.length - 1;
	document.getElementById('step-progress').textContent = `STEP ${stepNumber} OF ${activeProject.steps.length}`;
	document.getElementById('step-instruction').textContent = activeProject.steps[activeStepIndex];

	const picture = document.getElementById('step-picture');
	picture.replaceChildren(
		makeElement('span', 'step-main-emoji', activeProject.stepIcons[activeStepIndex] || activeProject.icon),
		makeElement('span', 'step-project-emoji', activeProject.icon)
	);

	const previousButton = document.getElementById('step-previous');
	previousButton.disabled = activeStepIndex === 0;
	const nextButton = document.getElementById('step-next');
	nextButton.textContent = lastStep ? 'Done ✓' : 'Next step →';
	nextButton.setAttribute('aria-label', lastStep ? 'Finish project guide' : 'Go to next step');

	const dots = document.getElementById('step-dots');
	dots.replaceChildren(...activeProject.steps.map((step, index) => {
		const dot = makeElement('button', 'step-dot');
		dot.type = 'button';
		dot.setAttribute('aria-label', `Go to step ${index + 1}`);
		if (index === activeStepIndex) dot.setAttribute('aria-current', 'step');
		dot.addEventListener('click', () => {
			activeStepIndex = index;
			renderGuideStep();
		});
		return dot;
	}));
}

document.getElementById('step-previous').addEventListener('click', () => {
	if (activeProject && activeStepIndex > 0) {
		activeStepIndex -= 1;
		renderGuideStep();
	}
});
document.getElementById('step-next').addEventListener('click', () => {
	if (!activeProject) return;
	if (activeStepIndex === activeProject.steps.length - 1) {
		projectDialog.close();
		return;
	}
	activeStepIndex += 1;
	renderGuideStep();
});

document.querySelectorAll('.filter-btn').forEach(button => {
	button.addEventListener('click', () => {
		activeFilter = button.dataset.filter;
		document.querySelectorAll('.filter-btn').forEach(filterButton => {
			const isActive = filterButton === button;
			filterButton.classList.toggle('active', isActive);
			filterButton.setAttribute('aria-pressed', String(isActive));
		});
		renderProjects();
	});
});

document.getElementById('clear-inventory').addEventListener('click', () => {
	inventoryMaterials.forEach(material => {
		savedInventory[material.id] = 0;
		const input = document.getElementById(`inventory-${material.id}`);
		input.value = '0';
		input.closest('.inventory-item').classList.remove('has-material');
	});
	localStorage.setItem('loopLabInventory', JSON.stringify(savedInventory));
	renderRecommendations();
});

const materialsToggle = document.getElementById('toggle-materials');
const materialsSection = document.getElementById('materials-finder');
materialsToggle.addEventListener('click', () => {
	const isOpening = materialsSection.hidden;
	materialsSection.hidden = !isOpening;
	materialsToggle.setAttribute('aria-expanded', String(isOpening));
	materialsToggle.querySelector('span').textContent = isOpening ? '−' : '＋';
	if (isOpening) materialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

searchInput.addEventListener('input', renderProjects);
document.getElementById('dialog-close').addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('click', event => {
	if (event.target === projectDialog) projectDialog.close();
});
document.addEventListener('keydown', event => {
	if (event.key === '/' && !projectDialog.open && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
		event.preventDefault();
		searchInput.focus();
	}
});

renderInventory();
renderRecommendations();
renderProjects();
