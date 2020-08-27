import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  
  let data = await prisma.user.findMany()
  console.log(data)

  await prisma.user.upsert({
    where: { email: 'test@email.com' },
    create: {
      name: `${Date.now()}`,
      email: 'test@email.com'
    },
    update: {
      name: `${Date.now()}`,
      email: 'test@email.com'
    }
  })

  data = await prisma.user.findMany()
  console.log(data)
  
  prisma.$disconnect()
}

main()
