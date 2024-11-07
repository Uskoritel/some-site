// import { PrismaClient, Roles as roles } from '@prisma/client'
// const prisma = new PrismaClient()
// async function main() {

//   const user = await prisma.roles.upsert({
//     where: { id: 1 },
//     update: {},
//     create: {
//       value: 'user',
//       description: 'normal user',
//     },
//   })


//    const admin = await prisma.roles.upsert({
//     where: { id: 2 },
//     update: {},
//     create: {
//       value: 'admin',
//       description: 'admin all rights',
//     },
//   })


// }
// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })