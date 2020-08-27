
const { PrismaClient } = require(`@prisma/client`)

async function main() {
  const prisma = new PrismaClient()

  let data = await prisma.user.findMany()
  console.log(data)

  await prisma.user.update({
    where: { email: 'test@email.com' },
    data: {
      name: `${Date.now()}`
    }
  })

  data = await prisma.user.findMany()
  console.log(data)

  prisma.$disconnect()
}

main()
