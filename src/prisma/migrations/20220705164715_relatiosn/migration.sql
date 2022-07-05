-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "products" INTEGER[];

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_catalog_id_fkey" FOREIGN KEY ("catalog_id") REFERENCES "Catalog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_buyer_id_fkey" FOREIGN KEY ("buyer_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
