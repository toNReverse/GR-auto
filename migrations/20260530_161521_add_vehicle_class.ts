import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_vehicles_vehicle_class" AS ENUM('civile', 'commerciale');
  CREATE TYPE "public"."enum__vehicles_v_version_vehicle_class" AS ENUM('civile', 'commerciale');
  ALTER TABLE "vehicles" ADD COLUMN "vehicle_class" "enum_vehicles_vehicle_class" DEFAULT 'civile';
  ALTER TABLE "_vehicles_v" ADD COLUMN "version_vehicle_class" "enum__vehicles_v_version_vehicle_class" DEFAULT 'civile';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "vehicles" DROP COLUMN "vehicle_class";
  ALTER TABLE "_vehicles_v" DROP COLUMN "version_vehicle_class";
  DROP TYPE "public"."enum_vehicles_vehicle_class";
  DROP TYPE "public"."enum__vehicles_v_version_vehicle_class";`)
}
