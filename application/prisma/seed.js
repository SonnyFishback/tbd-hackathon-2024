import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
	const plebLevel = await prisma.level.upsert({
		where: { id: 0 },
		update: {},
		create: {
			id: 0,
			name: 'N00B',
			picture: 'https://static2.bigstockphoto.com/4/5/2/large1500/254634.jpg',
			requirement: 0
		}
	});

	const newKidInTown = await prisma.level.upsert({
		where: { id: 1 },
		update: {},
		create: {
			id: 1,
			name: 'New Kid in Town',
			picture:
				'https://static.wikia.nocookie.net/helixpedia/images/5/5e/Joey.png/revision/latest?cb=20140515230100',
			requirement: 10
		}
	});

	const journeyMan = await prisma.level.upsert({
		where: { id: 2 },
		update: {},
		create: {
			id: 2,
			name: 'Journy man level',
			picture: 'https://miro.medium.com/v2/resize:fit:1024/1*YNtQH7JMtpfTU04O51To4Q.png',
			requirement: 20
		}
	});

	const epicBadAss = await prisma.level.upsert({
		where: { id: 3 },
		update: {},
		create: {
			id: 3,
			name: 'EPIC BADASS',
			picture: 'https://static2.bigstockphoto.com/4/5/2/large1500/254634.jpg',
			requirement: 30
		}
	});
	console.log({ plebLevel, newKidInTown, journeyMan, epicBadAss });
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
