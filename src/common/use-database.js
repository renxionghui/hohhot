import Dexie from 'dexie';
import tableData from './table-data'

let db

const useDatabase = async () => {
    if (!db) {
        db = new Dexie('hohhotDatabase');
        db.version(1).stores({
            vegetation: '++cid,pid,vegetationName,vegetationLevel ,totalArea,conservationArea,normalBuildingArea,classicalBuildingArea,gardenRoadArea,squareArea,waterArea,numArea,toiletDistribution,remark,person,phone',
            tree: `
                ++tid,cid,
                qm_ly_type,qm_ly_num1,qm_ly_num2,qm_ly_num3,qm_ly_num4,qm_ly_num5,qm_ly_num6,qm_ly_num7,qm_ly_total,
                qm_cl_type,qm_cl_num1,qm_cl_num2,qm_cl_num3,qm_cl_num4,qm_cl_num5,qm_cl_total,
                gm_ly_type,gm_ly_num1,gm_ly_num2,gm_ly_num3,gm_ly_num4,gm_ly_num5,gm_ly_num6,gm_ly_total,
                gm_cl_type,gm_cl_num1,gm_cl_num2,gm_cl_num3,gm_cl_num4,gm_cl_num5,gm_cl_num6,gm_cl_total,
                ll_dp_type,ll_dp_num1,ll_dp_num2,ll_dp_num3,ll_dp_num4,ll_dp_total,
                ll_sp_type,ll_sp_num1,ll_sp_num2,ll_sp_num3,ll_sp_num4,ll_sp_total,
                ll_pz_type,ll_pz_num1,ll_pz_num2,ll_pz_num3,ll_pz_num4,ll_pz_total
                `,
            grass: `
                ++gid,cid,
                qx_type,qx_num1,qx_num2,qx_num3,qx_num4,qx_total,
                cp_num1,cp_num2,cp_total,
                ch_num1,ch_num2,ch_total,
                pd_type,pd_num1,pd_num2,pd_num3,pd_num4,pd_total,
                ss_num1,ss_num2,ss_total,
                ht_num1,ht_num2,ht_total,
                py_type,py_num1,py_num2,py_num3,py_num4,py_total
                `
        })

        let vegetations = await db.vegetation.toArray();
        if (!vegetations.length) {
            for (const data of tableData) {
                await db.vegetation.add(data)
            }

            vegetations = await db.vegetation.toArray();
            for (const item of vegetations) {
                const cid = item.cid
                await db.tree.add({
                    cid, qm_ly_type: '', qm_ly_type: '', qm_ly_num1: '', qm_ly_num2: '', qm_ly_num3: '', qm_ly_num4: '', qm_ly_num5: '', qm_ly_num6: '',
                    qm_ly_num7: '', qm_ly_total: '', qm_cl_type: '', qm_cl_num1: '', qm_cl_num2: '', qm_cl_num3: '', qm_cl_num4: '', qm_cl_num5: '', qm_cl_total: '',
                    gm_ly_type: '', gm_ly_num1: '', gm_ly_num2: '', gm_ly_num3: '', gm_ly_num4: '', gm_ly_num5: '', gm_ly_num6: '', gm_ly_total: '',
                    gm_cl_type: '', gm_cl_num1: '', gm_cl_num2: '', gm_cl_num3: '', gm_cl_num4: '', gm_cl_num5: '', gm_cl_num6: '', gm_cl_total: '',
                    ll_dp_type: '', ll_dp_num1: '', ll_dp_num2: '', ll_dp_num3: '', ll_dp_num4: '', ll_dp_total: '',
                    ll_sp_type: '', ll_sp_num1: '', ll_sp_num2: '', ll_sp_num3: '', ll_sp_num4: '', ll_sp_total: '',
                    ll_pz_type: '', ll_pz_num1: '', ll_pz_num2: '', ll_pz_num3: '', ll_pz_num4: '', ll_pz_total: ''
                })

                await db.grass.add({
                    cid, qx_type: '', qx_num1: '', qx_num2: '', qx_num3: '', qx_num4: '', qx_total: '', cp_num1: '', cp_num2: '', cp_total: '', ch_num1: '', ch_num2: '', ch_total: '', pd_type: '', pd_num1: '', pd_num2: '', pd_num3: '', pd_num4: '', pd_total: '',
                    ss_num1: '', ss_num2: '', ss_total: '', ht_num1: '', ht_num2: '', ht_total: '', py_type: '', py_num1: '', py_num2: '', py_num3: '', py_num4: '', py_total: ''
                })
            }
        }

        db.queryVegetationListByPid = async (pid) => {
            return await db.vegetation.where('pid').equals(pid).toArray();
        }

        db.filterVegetationByName = async (pid, vName) => {
            return await db.vegetation.where('pid').equals(pid).filter((data) => data.vegetationName.includes(vName)).toArray()
        }

        db.queryVegetationByCid = async (cid) => {
            return await db.vegetation.get({ cid })
        }

        db.putVegetationByCid = async (item, cid) => {
            await db.vegetation.put(item, cid)
        }

        db.addVegetation = async (item) => {
            return await db.vegetation.add(item)
        }

        db.queryTreeByCid = async (cid) => {
            return await db.tree.get({ cid })
        }

        db.putTreeByCid = async (item, cid) => {
            await db.tree.put(item, cid)
        }

        db.addTree = async (item) => {
            return await db.tree.add(item)
        }

        db.queryGrassByCid = async (cid) => {
            return await db.grass.get({ cid })
        }

        db.putGrassByCid = async (item, cid) => {
            await db.grass.put(item, cid)
        }

        db.addGrass = async (item) => {
            return await db.grass.add(item)
        }

    }

    return db
}

export { useDatabase }



