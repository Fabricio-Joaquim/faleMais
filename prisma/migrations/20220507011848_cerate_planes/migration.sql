-- CreateTable
CREATE TABLE "planes" (
    "id" TEXT NOT NULL,
    "plan_name" TEXT NOT NULL,
    "plan_minute" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "planes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "planes_plan_name_key" ON "planes"("plan_name");
